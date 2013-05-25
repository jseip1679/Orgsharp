var AppView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "app-view",

  events: {

  },

  initialize: function(params){
    //TODO attach data listeners

    //render after attaching listeners
    this.render();
  },

  render: function(){
    //remove all children
    this.$el.children().detach();

    //Given a collection of users, iterate through each, instantiate a view, and render it
    //How do we know what this.collection is?
    return this.$el.html().append(this.collection.map(function(user){
      return new UserView({model:user}).render();
    }));
  }
});