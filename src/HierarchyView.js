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
    this.$el.children().detach();

    var rootId,
        hierarchy = this.options.hierarchy.attributes,
        model = this.model;
        self = this;

    //find the top of the hierarchy(root)
    _.find(hierarchy, function(v,k){
      if(v.hasOwnProperty("root")){
        rootId = k;
        return true;
      }
    });

    var X_INCR = 150,
        Y_OFFSET = 100;

    //initial rendering positions
    var x = $(window).width()/2 - X_INCR/2,
        y = 0,
        z = 0,
        curDepth = 0;

    var traverseTree = function(nodeId, hierarchy, xyz){
      var x = xyz[0],
          y = xyz[1],
          z = xyz[2];

      //ChildIDs is an array of all child ids for the current nodeID
      var childIDs = hierarchy[nodeId].children;
      var childrenToTraverse =[];

      //place the current model
      var nodeModel = model.get("users").get(nodeId);
      var nodeView = new UserView({model:nodeModel, xyz:xyz}).render().$el;

      console.log("Placing",nodeModel.get("firstname"),nodeModel.get("lastname"),"(id:"+nodeModel.get("id")+")", "at Coordinates:", xyz, "with depth ", curDepth);

      self.$el.append(nodeView);
      var yOffset = y + Y_OFFSET;
      curDepth++;

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
    return this;
  },

  hover: function(){

  },

  unhover: function(){

  }
});