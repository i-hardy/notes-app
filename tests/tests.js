var failArray = ["FAIL hahahaaa", "Your mental capacity doesnt seem to be enough for this task", "My granpa can code better than you"];
var passArray = ["Your code is OK", "I suppose that was alright"];



(function(exports) {
  var matchers = {
    assertion: null,
    toEqual: function(argument) {
      matchers.returnStatement(matchers.assertion === argument);
    },

    toBeArray: function() {
      matchers.returnStatement(Array.isArray(matchers.assertion));
    },

    toBeObject: function (object) {
      matchers.returnStatement(object.prototype.isPrototypeOf(matchers.assertion));
    },

    toBeTruthy: function() {
      matchers.returnStatement(!!matchers.assertion);
    },

    returnStatement: function(test) {
      if (test){
        var passResponse = passArray[Math.floor(Math.random() * passArray.length)];
        console.log('%c' + passResponse, 'color: #86FF00');
      }else{
        var failResponse = failArray[Math.floor(Math.random() * failArray.length)];
        console.log('%c' + failResponse, 'color: #EF0000');
      }
    }
  };

  function describe(string, callback) {
    console.log('%c' + string, 'color: #7320B4; font-weight: bold');
    callback();
  }

  function it(string, callback) {
    console.log("%c" + string, "color: #C599E7; font-weight: bold");
    callback();
  }

  function expect(argument) {
    matchers.assertion = argument;
    return matchers;
  }

  exports.describe = describe;
  exports.it = it;
  exports.expect = expect;
})(this);

describe("A test", function() {
  it("is a test", function () {
    expect(1).toEqual(1);
  });
});
