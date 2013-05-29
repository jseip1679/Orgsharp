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
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.orgView.render().el);
    return this;
  },

  hover: function(){
    this.$el.css("-webkit-transform",translate3d(0,0,0));
    this.$el.css("-webkit-transitionDuration","2s");
  },

  unhover: function(){
    this.$el.css("-webkit-transform",translate3d(0,0,0));
    this.$el.css("-webkit-transitionDuration","2s");
  }

});
