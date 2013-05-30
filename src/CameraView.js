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
      self.handleKeyInput(e);
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

  handleKeyInput: function(e){
    console.log("Yay Keypress! ", e.keyCode);
    switch (e.keyCode){
      case 37: //left
        console.log("moving left");
        this.dollyView.move(-50,0,0);
      break;
      case 39: //right
        console.log("moving right");
        this.dollyView.move(50,0,0);
      break;
      case 38: //up
        console.log("moving up");
        this.dollyView.move(0,50,0);
      break;
      case 40: //down
        console.log("moving down");
        this.dollyView.move(0,-50,0);
      break;
    }
  }
});
