var _; //globals

describe("About More Higher Order Functions", function () {
  it("should compose functions", function() {
    var addOne = function(number) {
      return number + 1;
    }
    var result = addOne(addOne(1));
    expect(result).toEqual(FILL_ME_IN);
  });

  it("should pass functions to other functions to run", function () {
    var addOne = function(number) {
      return number + 1;
    }
    var applyToFive = function(fn) {
      return fn(5);
    }
    expect(applyToFive(addOne)).toEqual(FILL_ME_IN);
  });

  it("should return functions from other functions", function () {
    var addOne = function(number) {
      return number + 1;
    }
    var addTwice = function(fn) {
      return function(number) {
        return fn(fn(number));
      };
    };
    var result = addTwice(addOne)(5);
    expect(result).toEqual(FILL_ME_IN);
  });

  it("should compose complex functions from simple functions", function() {
    var compose = function(f, g){
      return function(arg) {
        return f(g(arg))
      }
    };
    var addOne = function(number) {
      return number + 1;
    };
    var multFive = function(number) {
      return number * 5;
    }
    var operations = compose(addOne, compose(multFive, addOne));
    expect(operations(1)).toEqual(FILL_ME_IN);
  });

  it("should go higher", function() {
    var compose = function(f, g){
      return function(arg) {
        return f(g(arg))
      }
    };
    var ternary = function(check) {
      return function(whenTrue, whenFalse) {
        return function(value) {
          return check(value)? whenTrue(value) : whenFalse(value);
        };
      };
    };
    var isEven = function(number) {
      return number % 2 === 0;
    };
    var identity = function(thing) {
      return thing;
    };
    var addOne = function(number) {
      return number + 1;
    };
    var multTwo = function(number) {
      return number * 2;
    };
    var multThree = function(number) {
      return number * 3;
    };
    var results = _.map(
      [0,1,2,3,4,5], 
      compose(
        ternary(isEven)(multThree, multTwo),
        ternary(isEven)(addOne, identity)
      )
    );
    expect(results).toEqual(FILL_ME_IN);
  });
});

