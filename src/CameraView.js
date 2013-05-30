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
    this.xyzTrans = [0,0,0]; //set the current translation state to oz  
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.dollyView.render().el);
    return this;
  },

  hover: function(){
    // this.$el.css("-webkit-transform","rotateY(15deg)");
    // this.$el.css("-webkit-transitionDuration","2s");
  },

  unhover: function(){
    // this.$el.css("-webkit-transform","rotateY(0deg)");
    // this.$el.css("-webkit-transitionDuration","2s");
  },

  handleKeyInput: function(e){
    var ROTATION_DEG = 5;
    var DURATION = 1;
    var currentRotation;

    console.log("Yay Keypress! ", e.keyCode);
    switch (e.keyCode){
      case 37: //left
        this.xyzTrans[1] += ROTATION_DEG;
        this.dollyView.move(-50,0,0);
      break;
      case 39: //right
        this.xyzTrans[1] -= ROTATION_DEG;
        this.dollyView.move(50,0,0);
      break;
      case 38: //up
        this.xyzTrans[0] += ROTATION_DEG;
        this.dollyView.move(0,-50,0);
      break;
      case 40: //down
        this.xyzTrans[0] -= ROTATION_DEG;
        this.dollyView.move(0,50,0);
      break;
    }
    this.$el.css("-webkit-transform", rotateAxes(this.xyzTrans[0],this.xyzTrans[1],this.xyzTrans[2]));
    this.$el.css("-webkit-transitionDuration",DURATION+"s");

  }
});
