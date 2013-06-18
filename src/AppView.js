
var AppView = Backbone.View.extend({
  tagName: 'div',

  className: "application-view",

  events: {

  },

  initialize: function(){
    this.cameraView = new CameraView({model: this.app, hierarchy: this.hierarchy});
    this.bigUserView = new BigUserView({model: this.users.at(1)}); //passed app and hierarchy Data
  },

  render: function(){
    this.$el.children().detach();
    this.$el.append(this.cameraView.render().el);
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
