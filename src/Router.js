var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "user":"user"
  },

  initialize: function(){
    //Generate users, app, and view
    this.hierarchy = new Hierarchy(hierarchyData);
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users}); //passed users as a parameter
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy}); //passed app and hierarchy Data

    //Append our newly created views to the DOM
    $('.org-chart').append(this.cameraView.render().el);
  },

  start: function(){
    Backbone.history.start();
  },

  home: function(){},

  user: function(){}
});
