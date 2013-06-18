var UserView = Backbone.View.extend({
  tagName: 'div',

  className: "user-view",

  template: _.template('<div>\
                          <div class="user-profile-image" style="background: url(<%= imgUrl %>); background-repeat:no-repeat; background-size: 100% 100%"></div><br>\
                          <p class="user-name"><%= firstname %> <%= lastname %></p><br>\
                          <p class="user-phone"><%= mobile %></p><br>\
                          <p class="user-email"><%= email %></p>\
                        </div>'),
  events: {
    "mouseover" : "hover",
    "mouseleave" : "unhover",
    "click" : "selected"
  },

  initialize: function(){
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

    this.$el.css("-webkit-transform",translate3d(x+0,y+0,z+2));
    this.$el.css("-webkit-transitionDuration","0.5s");

  },

  unhover: function(){
    var x = this.options.xyz[0];
    var y = this.options.xyz[1];
    var z = this.options.xyz[2];

    this.$el.css("-webkit-transform",translate3d(x+0,y+0,z));
    this.$el.css("-webkit-transitionDuration","0.5s");
  },

  selected: function(){
    this.model.trigger("selected",this.model);
    this.model.trigger("requestFocus",this.model.get("xyz"));
  }

});
