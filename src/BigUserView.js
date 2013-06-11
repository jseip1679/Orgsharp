
var BigUserView = Backbone.View.extend({
  tagName: 'div',

  className: "big-user-view",

  template: _.template('<div class="big-user-profile-image" style="background: url(<%= imgUrl %>); background-repeat:no-repeat; background-size: 100% 100%"></div><br>\
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
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  toggleEdit: function(){
    this.$el.find(".edit-user-icon").toggleClass("half-invert");
  },

  toggleDelete: function(){
    this.$el.find(".delete-user-icon").toggleClass("half-invert");
  },

  toggleAdd: function(){
    this.$el.find(".add-user-icon").toggleClass("half-invert");
  },

  selected: function(){

  },

  addChild: function(){
    this.trigger("addNewChild", this.model.id);
  },

  deleteUser: function(){
    var confirmed = confirm("Are you sure you want to delete this user?");
    if(confirmed){
      this.trigger("deleteUser", this.model.id);
    }
  },

  handleKey: function(e){
    if(e.keyCode === 13){
      $email = this.$el.find('input[type=email]');
      $mobile = this.$el.find('input[type=tel]');
      $firstAndLast = this.$el.find('input[type=text]');

      var arry = $firstAndLast.val().split(' ');
      var first = arry[0];
      var last = arry[arry.length-1];
      this.model.set({
        firstname:_.escape(first),
        lastname:_.escape(last),
        email:_.escape($email.val()),
        mobile:_.escape($mobile.val())
      });
      this.$el.find('input').blur();
      this.model.save(); //save the model
    }
  }
});
