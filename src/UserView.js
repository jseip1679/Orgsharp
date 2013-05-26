var UserView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "user-view",

  //using underscore's templating system.
  template: _.template('<div>\
                          <img src=<%= imgUrl %>></img>\
                          <input type="text" value="<%= firstname %>"></input>\
                          <input type="text" value="<%= lastname %>"></input>\
                          <input type="tel" value="<%= mobile %>"></input>\
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
    console.log("userView rendering");
    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  hover: function(){
    console.log("hover event fired");
    this.$el.css("border-color","red");
  },

  unhover: function(){
    console.log("unhover event fired");
    this.$el.css("border-color","#8aaacc");
  }


});
