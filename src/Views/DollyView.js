var DollyView = Backbone.View.extend({
  tagName: 'div',

  className: "dolly-view",

  events: {
  },

  initialize: function(){
    this.X_START = -300;
    this.Y_START = 0;
    this.Z_START = -800;

    this.orgView = new HierarchyView({model: this.model, hierarchy: this.options.hierarchy}); //passed app and hierarchy Data
    this.listenTo(this.model, "change", this.render);
    this.xyz = [this.X_START,this.Y_START,this.Z_START]; //initialize dolly coordinates
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.orgView.render().el);

    this.$el.css("-webkit-transform",translate3d(this.xyz[0],this.xyz[1],this.xyz[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");
    this.$el.css("-webkit-transitionDuration","1s");
    return this;
  },

  move: function(x,y,z){
    this.xyz[0] = (this.xyz[0]+ x);
    this.xyz[1] = (this.xyz[1]+ y);
    this.xyz[2] = (this.xyz[2]+ z);

    this.$el.css("-webkit-transform",translate3d(this.xyz[0],this.xyz[1],this.xyz[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");
    this.$el.css("-webkit-transitionDuration","1s");
  },

  moveAbsolute: function(x,y,z){
    this.xyz[0] = x;
    this.xyz[1] = y;
    this.xyz[2] = z;

    this.$el.css("-webkit-transform",translate3d(this.xyz[0],this.xyz[1],this.xyz[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");
    this.$el.css("-webkit-transitionDuration","1s");
  },

  centerOnCoords: function(x,y,z){
    var centWidth = $(window).width()/2;
    var centHeight = $(window).height()/2;

    this.xyz[0] = centWidth-x+this.X_START+180;
    this.xyz[1] = centHeight-y+this.Y_START-90;
    this.xyz[2] = (this.Z_START)/2;

    this.$el.css("-webkit-transform",translate3d(this.xyz[0],this.xyz[1],this.xyz[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");
    this.$el.css("-webkit-transitionDuration","1s");
  }
});
