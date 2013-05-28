var UserReflectionView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "inverted-user",

  //using underscore's templating system.
  template: _.template('<div>\
                          <img src=<%= imgUrl %>></img><br>\
                          <input type="text" value="<%= firstname %> <%= lastname %>"></input><br>\
                          <input type="tel" value="<%= mobile %>"></input><br>\
                          <input type="email" value="<%= email %>"></input>\
                        </div>'),
  events: {
    "mouseover" : "hover",
    "mouseleave" : "unhover"
  },

  initialize: function(){
    //setting the view to listen to and re-render on any changes to the user model
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    this.$el.html(this.template(this.model.attributes));
    this.$el.css("-webkit-transform","scaleY(-1)");

    return this;
  },

  hover: function(){
    this.$el.css("border-color","red");
    this.$el.css("-webkit-transitionDuration","1s");


  },

  unhover: function(){
    this.$el.css("border-color","#8aaacc");
    this.$el.css("-webkit-transitionDuration","1s");
  }

});
