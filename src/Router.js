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


    this.bigUserView.on('addNewChild', function(childId){
      console.log("just created a new user");
      var newUserId = Math.floor(Math.random()*10000+100);
      this.hierarchy.set(newUserId, {children:[]});
      var newTreeDepth = updateTreeDepth(this.hierarchy.attributes);
      this.hierarchy.set("treeDepth",newTreeDepth);
      this.hierarchy.get(childId).children.push(newUserId);
      this.users.push(new User({id:newUserId}));
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
