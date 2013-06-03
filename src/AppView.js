
var AppView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "application-view",

  events: {
  },

  initialize: function(){
  },

  render: function(){
    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  selected: function(){

  }
});
