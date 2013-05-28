var UserView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "user-view",

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
    var x = this.options.xyz[0];
    var y = this.options.xyz[1];
    var z = this.options.xyz[2];

    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    this.$el.html(this.template(this.model.attributes));
    this.$el.css("-webkit-transform",translate3d(x,y,z));
    return this;
  },

  hover: function(){
    var x = this.options.xyz[0];
    var y = this.options.xyz[1];
    var z = this.options.xyz[2];

    this.$el.css("border-color","red");
    this.$el.css("-webkit-transform",translate3d(x+0,y+0,z+8));
    this.$el.css("-webkit-transitionDuration","1s");


  },

  unhover: function(){
    var x = this.options.xyz[0];
    var y = this.options.xyz[1];
    var z = this.options.xyz[2];

    this.$el.css("border-color","#8aaacc");
    this.$el.css("-webkit-transform",translate3d(x+0,y+0,z+0));
    this.$el.css("-webkit-transitionDuration","1s");
  }

});
