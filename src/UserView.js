var UserView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "user-view",

  //using underscore's templating system.
  template: _.template('<div>\
                          <img src=<%= imgUrl %>></img><br>\
                          <p class="user-name"><%= firstname %> <%= lastname %></p><br>\
                          <p class="user-phone"><%= mobile %></p><br>\
                          <p class="user-email"><%= email %></p>\
                          <img class="add-user-icon" src="./img/png/glyphicons_006_user_add.png">\
                        </div>'),
  events: {
    "mouseover" : "hover",
    "mouseleave" : "unhover",
    "click" : "selected",
    "mouseover .add-user-icon" : "hoverToggle",
    "mouseleave .add-user-icon" : "hoverToggle"

  },

  initialize: function(){
    //setting the view to listen to and re-render on any changes to the user model
    this.listenTo(this.model, "change", this.render);
    this.model.set("xyz",this.options.xyz); //set xyz on the model attribute
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
    this.$el.css("-webkit-transform",translate3d(x+0,y+0,z+3));
    this.$el.css("-webkit-transitionDuration","0.5s");

  },

  unhover: function(){
    var x = this.options.xyz[0];
    var y = this.options.xyz[1];
    var z = this.options.xyz[2];

    this.$el.css("border-color","#8aaacc");
    this.$el.css("-webkit-transform",translate3d(x+0,y+0,z+1));
    this.$el.css("-webkit-transitionDuration","0.5s");
  },

  selected: function(){
    this.model.trigger("selected",this.model);
    this.model.trigger("requestFocus",this.model.get("xyz"));
  },

  hoverToggle: function(){
    this.$el.find(".add-user-icon").toggleClass("half-invert");
  }
});
