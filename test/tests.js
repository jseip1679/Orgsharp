
describe('Views', function(){
  describe("BigUserView",function(){
    it("should have initialize and render methods ", function(){
      var user = new User();
      var bigUserView = new BigUserView({model:user});
      expect(bigUserView.render).to.exist;
      expect(bigUserView.initialize).to.exist;
    });
  });

  describe("UserView",function(){
    it("should have initialize and render methods ", function(){
      var user = new User();
      var userView = new UserView({model:user});
      expect(userView.render).to.exist;
      expect(userView.initialize).to.exist;
    });
  });
});

describe('Models', function(){
  describe("User",function(){
    it("should set default values for user creation ", function(){
      var myUser = new User();
      expect(myUser.get("email")).to.exist;
      expect(myUser.get("firstname")).to.exist;
      expect(myUser.get("lastname")).to.exist;
    });
  });

  describe("Users",function(){
    it("should be a collection of 'User' models", function(){
      var users = new Users(userData);
      expect(users).to.be.an.instanceof(Backbone.Collection);
      expect(users.at(0)).to.be.an.instanceof(User);
    });
    it("should be associated with the \/users route", function(){
      var users = new Users(userData);
      expect(users.url).to.eql('users');
    });
  });
});

describe('Helpers', function(){
  describe('updateTreeDepth', function(){
    it('should return an integer', function(){
      var hierarchy = new Hierarchy(hierarchyData);
      expect(updateTreeDepth(hierarchy)).to.be.an.integer;
    });
    it('should return five, given the dummy data provided', function(){
      var hierarchy = new Hierarchy(hierarchyData);
      expect(updateTreeDepth(hierarchy)).to.eql(5);
    });
  });
  describe('translate3d', function(){
    it('should return a properly formatted CSS 3D transform', function(){
      expect(translate3d(1,2,3)).to.match()      
    });
  });
});