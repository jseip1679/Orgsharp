var HierarchyView = Backbone.View.extend({

  tagName: "div",
  className: "HierarchyView",

  events: {

  },

  initialize: function(params){

  },

  render: function(){
    //find the root node
    var rootId = _.find(this.hierarchy, function(v){
      return v.hasOwnProperty("root");
    });
    //WIP
    var rootModel = this.model.get("users").id(rootId);
    this.$el.append(new User({model:retrievedModel}).render().el);
  }
});