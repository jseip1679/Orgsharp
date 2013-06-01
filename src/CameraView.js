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
    this.xyzRot = [-5,-35,0]; //set the current rotation state to oz

    //fancy intro animation
    setTimeout(function(){
      self.xyzRot = [0,0,0];
      self.render(3,"ease");
    },800);
  },

  render: function(transitionTime,transitionFunc){

    transitionTime = transitionTime || 1;
    transitionFunc = transitionFunc || "ease-out";

    this.$el.children().detach();
    this.$el.append(this.dollyView.render().el);

    this.$el.css("-webkit-transform", rotateAxes(this.xyzRot[0],this.xyzRot[1],this.xyzRot[2]));
    this.$el.css("-webkit-transition-timing-function",transitionFunc);
    this.$el.css("-webkit-transitionDuration",transitionTime+"s");
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

    switch (e.keyCode){
      case 37: //left
        this.xyzRot[1] += ROTATION_DEG;
        // this.dollyView.move(-50,0,0);
      break;
      case 39: //right
        this.xyzRot[1] -= ROTATION_DEG;
        // this.dollyView.move(50,0,0);
      break;
      case 38: //up
        // this.xyzRot[0] -= ROTATION_DEG;
        this.dollyView.move(0,-50,0);
      break;
      case 40: //down
        // this.xyzRot[0] += ROTATION_DEG;
        this.dollyView.move(0,50,0);
      break;
    }
    this.$el.css("-webkit-transform", rotateAxes(this.xyzRot[0],this.xyzRot[1],this.xyzRot[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");
    this.$el.css("-webkit-transitionDuration",DURATION+"s");
  }
});
