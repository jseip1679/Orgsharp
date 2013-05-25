var UserView = Backbone.view.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "user-view",

  //using underscore's templating system.
  template: _.template('<div><%= firstname %> -</div><div><%= lastname %></div>'),

  events: {

  },

  initialize: function(){
    //setting the view to listen to and re-render on any changes to the user model
    this.listenTo(this.model, "change", this.render);

    //render after attaching listeners
    this.render();
  },

  render: function(){
    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    return this.$el.html(this.template(this.model.attributes));
  }
});
