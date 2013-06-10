
var LogInView = Backbone.View.extend({
  //tagName defaults to div.  I'm specifying here to be more explicit.
  tagName: 'div',

  className: "log-in-view",

  template: '<label>email</label><input type="email" value=""></input><label>pass</label><input type="password" value=""></input><button>Log In</button>',

  events: {
    "click button": "sync"

  },

  initialize: function(){
  },

  render: function(){
    this.$el.html(this.template);
    return this;
  },

  sync: function(){
  }
});
