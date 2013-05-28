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


    var X_INCR = 150;
    var Y_OFFSET = 180;

    var x = $(window).width()/2 - X_INCR/2;
    var y = 0;
    var z = 0;
    var depth = 0;

    var traverseTree = function(nodeId, hierarchy, xyz){

      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];

      //ChildIDs is an array of all child ids for the current nodeID
      var childIDs = hierarchy[nodeId].children;

      //storage for children to traverse
      var childrenToTraverse =[];

      //place the root model
      console.log("Placing User at Coordinates:", xyz);
      var nodeModel = model.get("users").get(nodeId);
      var nodeView = new UserView({model:nodeModel, xyz:xyz}).render().$el;
      self.$el.append(nodeView);
      depth++;

      if(!childIDs){ // append a reflection if we're at the end 
        var reflectionView = new UserReflectionView({model:nodeModel, xyz:[x,y+Y_OFFSET,z+10]}).render().$el;
        self.$el.append(reflectionView);
      } else {
        for(var i = 0; i < childIDs.length; i++){

          //place the first child to the left, the second child to the right, the third to the left + x
          var xOffset = x + X_INCR*offsetIndex(i);
          var yOffset = y +(Y_OFFSET*depth/2);

          //store each element that needs to be traversed in childrenToTraverseArrray;
          childrenToTraverse.push([childIDs[i],hierarchy,[xOffset,yOffset,0]]);
        }
        _.each(childrenToTraverse, function(v){
          traverseTree(v[0], v[1], v[2]);
        });
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