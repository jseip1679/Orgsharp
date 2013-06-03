
var BigUserView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "big-user-view",

  //using underscore's templating system.
  template: _.template('<img class="big-user-profile-image" src=<%= imgUrl %>></img><br>\
                        <input type="text" value="<%= firstname %> <%= lastname %>"></input><br>\
                        <input type="tel" value="<%= mobile %>"></input><br>\
                        <input type="email" value="<%= email %>"></input>\
                        <img class="edit-user-icon" src="./img/png/glyphicons_030_pencil.png">\
                        <img class="add-user-icon" src="./img/png/glyphicons_006_user_add.png">'),
  events: {
    "mouseover .edit-user-icon" : "hoverEdit",
    "mouseleave .edit-user-icon" : "unhoverEdit",
    "mouseover .add-user-icon" : "hoverAdd",
    "mouseleave .add-user-icon" : "unhoverAdd"
  },

  initialize: function(){
    //setting the view to listen to and re-render on any changes to the user model
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    //take the model's attributes, inject them into the templating system, and set it as $el's HTML
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  hoverEdit: function(){
    this.$el.find(".edit-user-icon").toggleClass("invert");
  },

  unhoverEdit: function(){
    this.$el.find(".edit-user-icon").toggleClass("invert");
  },

  hoverAdd: function(){
    this.$el.find(".add-user-icon").toggleClass("invert");
  },

  unhoverAdd: function(){
    this.$el.find(".add-user-icon").toggleClass("invert");
  },

  selected: function(){

  }
});
