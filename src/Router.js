var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "users/:params":"users"
  },

  initialize: function(){
    this.hierarchy = new Hierarchy(hierarchyData);
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users, hierarchy: this.hierarchy}); //passed users as a parameter
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy});
    this.bigUserView = new BigUserView({model: this.users.at(0)}); //passed app and hierarchy Data
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

      var newTreeDepth = updateTreeDepth(this.hierarchy);
      this.hierarchy.set("treeDepth",newTreeDepth);

    },this);

    /*---           DELETE USERS          ----*/
    this.bigUserView.on('deleteUser', function(TBDelModelID){
      //get the hierarchy model for the current parent
      var TBDelModel = this.hierarchy.get(TBDelModelID);
      var parentID = TBDelModel.parent;
      var parent =  this.hierarchy.get(parentID);

      //remove the to-be-deleted model's id from the parent's children list.  Add-the to-be deleted child's children to that collection 
      var parentChildren = _(parent.children).without(TBDelModelID);
      parent.children = _.union(parentChildren, TBDelModel.children);
      this.hierarchy.set(parentID, parent);

      //set the parentID for each of TBDel's children
      _.each(TBDelModel.children, function(childID){
        var currModel = this.hierarchy.get(childID);
        currModel["parent"] = parentID;
        this.hierarchy.set(childID, currModel);
      },this);

      //remove the tbDelModel from both users and hierarchy
      this.hierarchy.unset(TBDelModelID);

      //destory the model on the server
      var targetModel = this.users.get(TBDelModelID);
      targetModel.destroy({success: function(model, response){
        console.log("model effectively destroyed");
      }, error: function(err){
        console.log("failed to destroy model", err);
      }});

      // recalculate the depth of the tree
      var newTreeDepth = updateTreeDepth(this.hierarchy);
      this.hierarchy.set("treeDepth",newTreeDepth);

    },this);

    $('.org-chart').append(this.cameraView.render().el);
    // $('header').append(this.logInView.render().el);
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
