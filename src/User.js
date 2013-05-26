var User = Backbone.Model.extend({
  defaults: {firstname:'Firstname',
    lastname: 'Lastname',
    email: 'first.last@co.com',
    company: 'Company',
    mobile: '+1 (650) 415 5101',
    title:'Title',
    imgUrl: "none"
  }
});