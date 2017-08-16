var failArray = ["FAIL hahahaaa", "Your mental capacity doesnt seem to be enough for this task", "My granpa can code better than you"];
var passArray = ["Your code is OK", "I suppose that was alright"];



(function(exports) {
  function describe(string, callback) {
    console.log('%c' + string, 'color: #00008B; font-weight: bold');
    callback();
  };

  var it = {
    isEqual: function(arg1, arg2) {
      console.log(arg1);
      console.log("===");
      console.log(arg2);
      it.returnStatement(arg1 === arg2);
    },

    isArrayOfObjects: function(array, objectName) {
      it.returnStatement(array.every(function(object) {
        return objectName.prototype.isPrototypeOf(object);
      }));
    },

    isTruthy: function(arg) {
      it.returnStatement(arg !== false || null);
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




  exports.describe = describe;
  exports.it = it;
})(this);





describe("Test to test if the tests works", function(){it.isEqual(1, 1)});
