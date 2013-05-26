var HierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "HierarchyView",

  events: {

  },

  initialize: function(params){


  },

  render: function(){
    //WIP
    //PSUEDO
    //find the top of the hierarchy(root)
    var rootKey;
    _.find(this.options.hierarchy, function(v,k){
      if(v.hasOwnProperty("root")){
        rootKey = k;
        return true;
      }
    });
    console.log(rootKey);
    var rootModel = this.model.get("users").get('c'+rootKey);
    console.log(rootModel);
    //build it
    //find all of its children, build them
    //find the children's children,build them
    //keep going until there are no more children.
    //Attach the tree to the DOM
    this.$el.append(new UserView({model:retrievedModel}).render().el);
    return this;
  }
});