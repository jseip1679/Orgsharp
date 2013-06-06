var User = Backbone.Model.extend({
  defaults: {firstname:'New',
    lastname: 'User',
    email: 'new.user@org.com',
    company: 'OrgSharp',
    mobile: '+1 (234) 567 8901',
    title:'Title',
    imgUrl: "http://www.susu.tv/wp-content/uploads/2012/07/blank_profile_250.jpeg"
  }
});