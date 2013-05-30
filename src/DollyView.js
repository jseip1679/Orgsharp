var DollyView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "dolly-view",

  events: {
    "mouseover" : "hover",
    "mouseleave" : "unhover"
  },

  initialize: function(){
    this.orgView = new HierarchyView({model: this.model, hierarchy: this.options.hierarchy}); //passed app and hierarchy Data
    this.reflectedOrgView = new ReflectedHierarchyView({model: this.model, hierarchy: this.options.hierarchy});
    this.listenTo(this.model, "change", this.render);
    this.xyz = [0,0,0]; //initialize dolly coordinates to 000
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.orgView.render().el);
    this.$el.append(this.reflectedOrgView.render().el);
    return this;
  },

  hover: function(){
    // this.$el.css("-webkit-transform",translate3d(0,0,0));
    // this.$el.css("-webkit-transitionDuration","2s");
  },

  unhover: function(){
    // this.$el.css("-webkit-transform",translate3d(0,0,0));
    // this.$el.css("-webkit-transitionDuration","2s");
  },

  move: function(x,y,z){
    this.xyz[0] += x;
    this.xyz[1] += y;
    this.xyz[2] += z;

    this.$el.css("-webkit-transform",translate3d(this.xyz[0],this.xyz[1],this.xyz[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");

    this.$el.css("-webkit-transitionDuration","1s");

  }



});
