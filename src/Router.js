var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "user":"user"
  },

  initialize: function(){
    //Generate users, app, and view
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users}); //passed users as a parameter
    this.view = new  AppView({model: this.app}); //passed app as a parameter
    this.orgView = new HierarchyView({model: this.app, hierarchy: hierarchyData}); //passed app and hierArchy Data


    //Append our newly created view to the DOM
    $('body').append(this.view.render().el);
  },

  start: function(){
    Backbone.history.start();
  },

  home: function(){},

  user: function(){}
});