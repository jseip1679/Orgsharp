var Router = new (Backbone.Router.extend({
  routes: {
    "": "home",
    "user":"user"
  },

  initialize: function(){
    //Generate users, app, and view
    this.users = new Users(userData);
    this.app = new App({users: this.users});
    this.view = new  AppView({model: this.app});

    //Append our newly created view to the DOM
    $('body').append(this.view.render());
  },

  start: function(){},

  home: function(){},

  users: function(){}
  
}));