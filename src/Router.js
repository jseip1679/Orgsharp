var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "users/:params":"users"
  },

  initialize: function(){
    this.hierarchy = new Hierarchy(hierarchyData);
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users}); //passed users as a parameter
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy}); //passed app and hierarchy Data
    this.bigUserView = new BigUserView({model: this.users.at(1)}); //passed app and hierarchy Data


    this.users.on('selected', function(user){
      this.navigate("users/"+user.id);
      this.bigUserView.model = user;
      //console.log("reset user");
      this.bigUserView.render();
      // console.log("Navigating to:" + user.get('firstname'));
    }, this);

    $('.org-chart').append(this.cameraView.render().el);
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
    }
  }
});
