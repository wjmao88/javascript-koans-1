var _; //globals

describe("About Async", function () {

  it("should setTimeout", function(done) {
    var numbers = [1];
    setTimeout(function() {
      numbers.push(2)
      expect(numbers).toEqual(FILL_ME_IN);
      done();
    }, 1);
    numbers.push(3)
    expect(numbers).toEqual(FILL_ME_IN);
  });


  it("should setTimeout multiple times", function(done) {
    var numbers = [1];
    setTimeout(function() {
      numbers.push(2)
      expect(numbers).toEqual(FILL_ME_IN);
      done();
    }, 2);

    setTimeout(function() {
      numbers.push(3)
      expect(numbers).toEqual(FILL_ME_IN);
      done();
    }, 1);

    numbers.push(4)
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should timeout in a chain", function(done) {
    var numbers = [1];

    setTimeout(function() {
      setTimeout(function() {
        numbers.push(2);
        expect(numbers).toEqual(FILL_ME_IN);
        done();
      }, 2);
      numbers.push(3);
      expect(numbers).toEqual(FILL_ME_IN);
    }, 1);

    numbers.push(4)
    expect(numbers).toEqual(FILL_ME_IN);
  });
});

