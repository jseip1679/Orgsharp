var HierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "hierarchy-view",

  events: {
    "mouseover": "hover",
    "mouseleave": "unhover"
  },

  initialize: function(params){

    var hierarchy = this.options.hierarchy.attributes,
        self = this;


    this.listenTo(this.model.attributes.users, "add", function(){
      this.render();
      },this);

    _.find(hierarchy, function(v,k){
      if(v.hasOwnProperty("root")){
        self.rootId = k; //set the root id
        return true;
      }
    });
  },

  render: function(){
    this.$el.children().detach();

    $svg = $('<svg xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>');
    this.$el.append($svg);

    var hierarchy = this.options.hierarchy.attributes,
        model = this.model;
        self = this,
        treeDepth = hierarchy.treeDepth;

    var X_INCR = 150,
        Y_INCR = 180;

    //initial rendering positions
    var x = $(window).width()/2 - X_INCR/2,
        y = 0,
        z = 1;

    var curDepth = 0;

    var traverseTree = function(nodeId, hierarchy, xyz){
      var x = xyz[0],
          y = xyz[1],
          z = xyz[2]+1;

      //ChildIDs is an array of all child ids for the current nodeID
      var childIDs = hierarchy[nodeId].children;

      //place the current model
      var nodeModel = model.get("users").get(nodeId);
      var nodeView = new UserView({model:nodeModel, xyz:xyz}).render().$el;
      curDepth++;
      //console.log("Placing",nodeModel.get("firstname"),nodeModel.get("lastname"),"(id:"+nodeModel.get("id")+")", "at Coordinates:", xyz, "with depth ", curDepth);

      self.$el.append(nodeView);
      var yOffset = y + Y_INCR;

      if(childIDs) {
        for(var i = 0; i < childIDs.length; i++){
          var xOffset = x + X_INCR*offsetIndex(i)*(treeDepth-curDepth);
          var $path = generateSVGPath(x+X_INCR/2,y+Y_INCR/2,xOffset+X_INCR/2,yOffset+Y_INCR/2,5000);
          var svg = self.$el.find('svg').append($path);
          traverseTree(childIDs[i],hierarchy,[xOffset,yOffset,1]);
        }
      }
      curDepth--;
    };

    traverseTree(this.rootId, hierarchy, [x,y,z]);
    return this;
  },

  hover: function(){

  },

  unhover: function(){

  }
});