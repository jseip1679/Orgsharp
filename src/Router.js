var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "users":"users"
  },

  initialize: function(){
    this.hierarchy = new Hierarchy(hierarchyData);
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users}); //passed users as a parameter
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy}); //passed app and hierarchy Data

    this.users.on('selected', function(user){
      this.navigate("users/"+user.get('firstname') +user.get('lastname'));
      // console.log("Navigating to:" + user.get('firstname'));
    }, this);

    //Append our newly created views to the DOM
    $('.org-chart').append(this.cameraView.render().el);
  },

  start: function(){
    Backbone.history.start();
  },

  home: function(){},

  user: function(){}
});
