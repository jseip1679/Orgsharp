var FlatView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "flat-view",

  events: {
    "mouseover": "hover",
    "mouseleave": "unhover"
  },

  initialize: function(params){
    //TODO attach data listeners


  },

  render: function(){
    //remove all children
    this.$el.children().detach();
    //Given a collection of users, iterate through each, instantiate a view, and render it
    var users = this.model.get("users");
    var x = 0;
    var y = 0;
    var z = 0;

    //WIP
    this.$el.append(users.map(function(user){
      x += 140; //add  140px
      return new UserView({model:user, xyz:[x,y,z]}).render().el;
    }));
    this.$el.append("<br>");
    this.$el.append(users.map(function(user){
      return new UserReflectionView({model:user}).render().el;
    }));
    return this;
  },

  hover: function(){
    this.$el.css("-webkit-transform-style","preserve-3d");
    this.$el.css("-webkit-transform",rotateAxis("Y",15));
    this.$el.css("-webkit-transitionDuration","3s");
  },

  unhover: function(){
    this.$el.css("-webkit-transform-style","preserve-3d");
    this.$el.css("-webkit-transform",rotateAxis("Y",0));
    this.$el.css("-webkit-transitionDuration","3s");
  }
});