var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "user":"user"
  },

  initialize: function(){
    //Generate users, app, and view
    this.users = new Users(userData); //collection of many 'user'
    this.app = new App({users: this.users}); //passed users as a parameter
    //this.flatView = new  FlatView({model: this.app}); //passed app as a parameter
    this.orgView = new HierarchyView({model: this.app, hierarchy: hierarchyData}); //passed app and hierarchy Data

    //WIP
    this.dollyView = new DollyView({model: this.app, hierarchy: hierarchyData}); //passed app and hierarchy Data

    //Append our newly created views to the DOM
    //$('.all-users').append(this.flatView.render().el);
    //$('.org-chart').append(this.orgView.render().el);
    $('.org-chart').append(this.dollyView.render().el);


  },

  start: function(){
    Backbone.history.start();
  },

  home: function(){},

  user: function(){}
});
