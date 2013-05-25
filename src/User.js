var User = Backbone.Model.extend({
  defaults: {firstname:'Firstname',
    lastname: 'Lastname',
    email: 'firstname.lastname@company.com',
    company: 'Company',
    title:'Title'
  }
});