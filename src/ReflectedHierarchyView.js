var ReflectedHierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "reflected-hierarchy-view",

  events: {
 },

  initialize: function(params){


  },

  render: function(){

    var rootId,
        hierarchy = this.options.hierarchy.attributes,
        treeDepth = hierarchy.depth;
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
    var Y_OFFSET = 100;

    //initial rendering positions
    var x = $(window).width()/2 - X_INCR/2;
    var y = -Y_OFFSET/2;
    var z = 0;
    var curDepth = 0;

    var traverseTree = function(nodeId, hierarchy, xyz){

      var x = xyz[0],
          y = xyz[1],
          z = xyz[2];

      //ChildIDs is an array of all child ids for the current nodeID
      var childIDs = hierarchy[nodeId].children;
      var childrenToTraverse =[];

      //place the root model
      var nodeModel = model.get("users").get(nodeId);
      var nodeView = new UserView({model:nodeModel, xyz:xyz}).render().$el;

      self.$el.append(nodeView);
      var yOffset = y + Y_OFFSET;
      curDepth = Math.floor(y / Y_OFFSET);

      if(childIDs) {
        for(var i = 0; i < childIDs.length; i++){
          var xOffset = x + X_INCR*offsetIndex(i);
          childrenToTraverse.push([childIDs[i],hierarchy,[xOffset,yOffset,0]]);
        }
        _.each(childrenToTraverse, function(v){
          traverseTree(v[0], v[1], v[2]);
        });
      }
    };

    traverseTree(rootId, hierarchy, [x,y,z]);

    this.$el.css("-webkit-transform","scaleY(-1) ");//+translate3d(0,-((treeDepth+1)*Y_OFFSET*2),0));
    return this;
  },

  hover: function(){

  },

  unhover: function(){

  }
});