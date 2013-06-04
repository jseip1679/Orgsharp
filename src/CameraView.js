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
    this.listenTo(this.model.attributes.users, "requestFocus", this.focusOnCoordinates);

    this.xyzRot = [-5,-15,0]; //set the current rotation state to oz

    //fancy intro animation
    setTimeout(function(){
      self.xyzRot = [-5,-5,0];
      self.render(3,"ease");
    },1000);
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
  },

  unhover: function(){
  },

  handleKeyInput: function(e){
    var ROTATION_DEG = 5;
    var DURATION = 1;
    var currentRotation;

    console.log(e.keyCode);

    switch (e.keyCode){
      case 37: //left
        //this.xyzRot[1] += ROTATION_DEG;
        this.dollyView.move(-50,0,0);
      break;
      case 39: //right
        //this.xyzRot[1] -= ROTATION_DEG;
        this.dollyView.move(50,0,0);
      break;
      case 38: //up
        // this.xyzRot[0] -= ROTATION_DEG;
        this.dollyView.move(0,0,-50);
      break;
      case 40: //down
        // this.xyzRot[0] += ROTATION_DEG;
        this.dollyView.move(0,0,50);
      break;
      case 187: //plus
        this.xyzRot[1] = Math.min(this.xyzRot[1] + ROTATION_DEG,45);
      break;
      case 189: //minus
        this.xyzRot[1] = Math.max(this.xyzRot[1] - ROTATION_DEG,-45);
      break;
      case 219: //plus
        this.dollyView.move(0,-50,0);
      break;
      case 221: //minus
        this.dollyView.move(0,50,0);
      break;
    }

    this.$el.css("-webkit-transform", rotateAxes(this.xyzRot[0],this.xyzRot[1],this.xyzRot[2]));
    this.$el.css("-webkit-transition-timing-function","ease-out");
    this.$el.css("-webkit-transitionDuration",DURATION+"s");
  },

  focusOnCoordinates: function(coords){
    this.dollyView.centerOnCoords(coords[0],coords[1],coords[2]);
  }
});
