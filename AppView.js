var AppView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "app-view",

  events: {

  },

  initialize: function(params){
    //TODO attach data listeners


  },

  render: function(){
    //remove all children
    this.$el.children().detach();
    //Given a collection of users, iterate through each, instantiate a view, and render it
    var users = this.model.get("users");
    this.$el.append(users.map(function(user){
      return new UserView({model:user}).render().el;
    }));
    return this;
  }
});