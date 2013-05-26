var HierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "HierarchyView",

  events: {

  },

  initialize: function(params){


  },

  render: function(){

    //save hierarchy and model to avoid scope issues;
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

    console.log(rootId);

    //function helper for tree traversal
    var traverseTree = function(nodeId, hierarchy){

        console.log("traverseTree with NodeID:", nodeId);

        //get the IDs of child elements
        var childIDs = hierarchy[nodeId].children || [];

        //call traverseTree on each of them
        var childElements = _.map(childIDs,function(v,k,o){
          return traverseTree(v, hierarchy);
        });

        //retrieve model with the specified from the collection
        var nodeModel = model.get("users").get(nodeId);
        console.log("Sucessfully retrieved model with cid:",nodeModel.cid);

        //render the current model and append all its children
        var nodeView = new UserView({model:nodeModel}).render().$el.append(childElements);
        console.log("We're getting the correct HTML: ", nodeView.html());

        //return the rendered tree
        return nodeView;
    };

    //Call traverse tree from the root node and append it to $el
    this.$el.append(traverseTree(rootId, hierarchy));
    return this;
  }
});