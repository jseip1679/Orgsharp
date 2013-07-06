

describe('Views', function(){
  describe("User",function(){
    it("should set default values for user creation ", function(){
      var myUser = new User();
      expect(myUser.get("email")).to.exist;
      expect(myUser.get("firstname")).to.exist;
      expect(myUser.get("lastname")).to.exist;
    });
  });
});

describe('Models', function(){

});

describe('Helpers', function(){

});