var User = Backbone.Model.extend({
  defaults: {firstname:'First',
    lastname: 'Last',
    email: 'first.last@co.com',
    company: 'Company',
    mobile: '+1 (650) 415 5101',
    title:'Title',
    
    imgUrl: "http://2.gravatar.com/avatar/45cdf76f6e790300259e9db011540127?size=100"
  }
});