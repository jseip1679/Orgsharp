
var BigUserView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "big-user-view",

  //using underscore's templating system.
  template: _.template('<div>\
                          <img src=<%= imgUrl %>></img><br>\
                          <input type="text" value="<%= firstname %> <%= lastname %>"></input><br>\
                          <input type="tel" value="<%= mobile %>"></input><br>\
                          <input type="email" value="<%= email %>"></input>\
                        </div>'),
  events: {
    "click" : "selected"
  },

  initialize: function(){
    //setting the view to listen to and re-render on any changes to the user model
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  hover: function(){this.$el.css("-webkit-transitionDuration","1s");

  },

  unhover: function(){
  },

  selected: function(){

  }
});
