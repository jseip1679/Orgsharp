var CameraView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "camera-view",

  events: {
    "mouseover" : "hover",
    "mouseleave" : "unhover"
  },

  initialize: function(){
    //bind all window keydown events to this model
    var self = this;
    $('body').on('keydown', function(e){
      self.logKey(e);
    });

    this.dollyView = new DollyView({model: this.model, hierarchy: this.options.hierarchy}); //passed app and hierarchy Data
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.dollyView.render().el);
    return this;
  },

  hover: function(){
    this.$el.css("-webkit-transform","rotateY(15deg)");
    this.$el.css("-webkit-transitionDuration","2s");
  },

  unhover: function(){
    this.$el.css("-webkit-transform","rotateY(0deg)");
    this.$el.css("-webkit-transitionDuration","2s");
  },

  logKey: function(e){
    console.log("Yay Keydown! ", e.keyCode);
  }

});
