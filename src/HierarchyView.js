var HierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "hierarchy-view",

  events: {
    "mouseover": "hover",
    "mouseleave": "unhover"
  },

  initialize: function(params){


  },

  render: function(){

    var rootId,
        hierarchy = this.options.hierarchy,
        model = this.model;
        self = this;

    //find the top of the hierarchy(root)
   _.find(hierarchy, function(v,k){
      if(v.hasOwnProperty("root")){
        rootId = k;
        return true;
      }
    });

    var x = $(window).width()/2;
    var y = 0;
    var z = 0;
    var depth = 0;

    var X_INCR = 150;
    var Y_OFFSET = 180;


    var traverseTree = function(nodeId, hierarchy, xyz){

      var childIDs = hierarchy[nodeId].children;
      var childElements;

      var nodeModel = model.get("users").get(nodeId);
      console.log("Coordinates:", xyz);
      var nodeView = new UserView({model:nodeModel, xyz:xyz}).render().$el;
      self.$el.append(nodeView);

      if(childIDs){
        for(var i = 0; i < childIDs.length; i++){
          //place the first child to the left, the second child to the right, the third to the left + x
          var xOffset = x + X_INCR*offsetIndex(i);
          console.log(xOffset);
          var yOffset = y +(Y_OFFSET*depth);
          depth++;
          traverseTree(childIDs[i], hierarchy, [xOffset,yOffset,0]);
        }
      }
    };

    //Call traverse tree from the root node and append it to $el
    traverseTree(rootId, hierarchy, [x,y,z]);
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