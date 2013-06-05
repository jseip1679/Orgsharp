var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "users/:params":"users"
  },

  initialize: function(){
    this.hierarchy = new Hierarchy(hierarchyData);
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users, hierarchy: this.hierarchy}); //passed users as a parameter
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy}); //TODO Fix so we're not passing the hierarachy aroun twice 
    this.bigUserView = new BigUserView({model: this.users.at(1)}); //passed app and hierarchy Data
    this.logInView = new LogInView();


    this.users.on('selected', function(user){
      this.navigate("users/"+user.id);
      this.bigUserView.model = user;
      this.bigUserView.render();
    }, this);

    /*---             ADD USERS          ----*/
    this.bigUserView.on('addNewChild', function(parentID){
      var newUserId = Math.floor(Math.random()*10000+100);
      this.hierarchy.set(newUserId, {parent:parentID, children:[]});

      var parent = this.hierarchy.get(parentID);
      var parentsChildren = parent.children;
      parentsChildren.push(newUserId);

      parent["children"] = parentsChildren;
      this.hierarchy.set(parentID, parent);

      this.users.push(new User({id:newUserId}));

      var newTreeDepth = updateTreeDepth(this.hierarchy.attributes);
      this.hierarchy.set("treeDepth",newTreeDepth);

      // console.log("Hierarchy",this.hierarchy.attributes);
      // console.log("Users", this.users);

    },this);

    /*---           DELETE USERS          ----*/
    this.bigUserView.on('deleteUser', function(TBDelModelID){
      //get the hierarchy model for the current parent
      var TBDelModel = this.hierarchy.get(TBDelModelID);
      var parentID = TBDelModel.parent;
      var parent =  this.hierarchy.get(parentID);

      console.log("Parent Info", parent);

      //remove the to-be-deleted model's id from the parent's children list.  Add-the to-be deleted child's children to that collection 
      var parentChildren = _(parent.children).without(TBDelModelID);
      parent.children = _.union(parentChildren, TBDelModel.children);
      this.hierarchy.set(parentID, parent);

      //set the parentID for each of TBDel's children
      _.each(TBDelModel.children, function(childID){
        var currModel = this.hierarchy.get(childID);
        // debugger;
        currModel["parent"] = parentID;
        this.hierarchy.set(childID, currModel);
      },this);

      //remove the tbDelModel from both users and hierarchy
      this.hierarchy.unset(TBDelModelID);
      this.users.remove(TBDelModelID);

      //recalculate the depth of the tree
      // var newTreeDepth = updateTreeDepth(this.hierarchy.attributes);
      // this.hierarchy.set("treeDepth",newTreeDepth);

      console.log("Hierarchy after the operation:",this.hierarchy.attributes);
      console.log(this.users);

    },this);

    $('.org-chart').append(this.cameraView.render().el);
    $('header').append(this.logInView.render().el);
    $('.big-user-view-container').append(this.bigUserView.render().el);

  },

  start: function(){
    Backbone.history.start();
  },

  home: function(){},

  users: function(params){
    var target = this.users.get(params);
    if(target){
      target.trigger("selected",target);
      target.trigger("requestFocus",target.get("xyz"));
    }
  }
});
