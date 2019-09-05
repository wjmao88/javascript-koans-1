function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;
}

Muppet.prototype.answerNanny = function(){
  return "Everything's cool!";
}

Muppet.prototype.cook = function() {
  return "Bah this stinks!";
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;
}

SwedishChef.prototype = new Muppet();

SwedishChef.prototype.cook = function() {
  return "Bah this stinks!";
}

describe("About inheritance", function() {
  var muppet;
  var swedishChef;
  beforeEach(function(){
    muppet = new Muppet(2, "coding");
	  swedishChef = new SwedishChef(3, "cooking", "chillin");
  });

  it("should set constructor parameters on the base object", function() {
    expect(muppet.age).toEqual(FILL_ME_IN);
    expect(swedishChef.age).toEqual(FILL_ME_IN);
    expect(muppet.hobby).toEqual(FILL_ME_IN);
    expect(swedishChef.hobby).toEqual(FILL_ME_IN);
  });

  it("should set constructor parameters on the derived object", function() {
    expect(muppet.answerNanny()).toEqual(FILL_ME_IN);
    expect(swedishChef.mood).toEqual(FILL_ME_IN);
  });

  it("should be able to call a method on the base object", function() {
    expect(muppet.answerNanny()).toEqual(FILL_ME_IN);
    expect(swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });

  it("should be able to override a method on the derived object", function() {
    expect(muppet.cook()).toEqual(FILL_ME_IN);
    expect(swedishChef.cook()).toEqual(FILL_ME_IN);
  });

  it("should be able to change the base object prototype to affect derived object prototype", function() {
    Muppet.prototype.answerNanny = function(){
      return "Nothing's cool!";
    }    
    expect(muppet.answerNanny()).toEqual(FILL_ME_IN);
    expect(swedishChef.answerNanny()).toEqual(FILL_ME_IN);
  });
});
