
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
                        <img class="delete-user-icon" src="./img/png/glyphicons_197_remove.png">\
                        <img class="add-user-icon" src="./img/png/glyphicons_006_user_add.png">'),
  events: {
    "mouseover .edit-user-icon" : "toggleEdit",
    "mouseleave .edit-user-icon" : "toggleEdit",
    "mouseover .add-user-icon" : "toggleAdd",
    "mouseleave .add-user-icon" : "toggleAdd",
    "mouseleave .delete-user-icon" : "toggleDelete",
    "mouseover .delete-user-icon" : "toggleDelete",

    "click .add-user-icon": "addChild",
    "click .delete-user-icon": "deleteUser",
    "keydown input": "handleKey"

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

  toggleEdit: function(){
    this.$el.find(".edit-user-icon").toggleClass("invert");
  },

  toggleDelete: function(){
    this.$el.find(".delete-user-icon").toggleClass("invert");
  },

  toggleAdd: function(){
    this.$el.find(".add-user-icon").toggleClass("invert");
  },

  selected: function(){

  },

  addChild: function(){
    this.trigger("addNewChild", this.model.id);
  },

  deleteUser: function(){
    this.trigger("deleteUser", this.model.id);
  },

  handleKey: function(e){
    if(e.keyCode === 13){
      $email = this.$el.find('input[type=email]');
      $mobile = this.$el.find('input[type=tel]');
      $firstAndLast = this.$el.find('input[type=text]');

      var arry = $firstAndLast.val().split(' ');
      var first = arry[0];
      var last = arry[arry.length-1];
      this.model.set({firstname:first, lastname:last, email:$email.val(), mobile:$mobile.val()});
      this.$el.find('input').blur();
    }
  }
});
