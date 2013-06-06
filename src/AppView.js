
var AppView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "application-view",

  events: {

  },

  initialize: function(){
    debugger;
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy}); //TODO Fix so we're not passing the hierarachy aroun twice 
    this.bigUserView = new BigUserView({model: this.users.at(1)}); //passed app and hierarchy Data
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.cameraView.render().el,);

    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  selected: function(){

  }
});
