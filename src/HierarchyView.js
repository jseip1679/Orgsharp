var HierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "hierarchy-view",

  events: {

  },

  initialize: function(params){


  },

  render: function(){

    var rootId,
        hierarchy = this.options.hierarchy,
        model = this.model;

    //find the top of the hierarchy(root)
   _.find(hierarchy, function(v,k){
      if(v.hasOwnProperty("root")){
        rootId = k;
        return true;
      }
    });

    var traverseTree = function(nodeId, hierarchy){
        var childIDs = hierarchy[nodeId].children || [];
        var childElements = _.map(childIDs,function(v,k,o){
          return traverseTree(v, hierarchy);
        });
        var nodeModel = model.get("users").get(nodeId);
        var nodeView = new UserView({model:nodeModel}).render().$el.append(childElements);
        return nodeView;
    };

    //Call traverse tree from the root node and append it to $el
    this.$el.append(traverseTree(rootId, hierarchy));
    return this;
  }
});