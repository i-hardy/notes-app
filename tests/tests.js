var failArray = ["FAIL hahahaaa", "Your mental capacity doesnt seem to be enough for this task", "My granpa can code better than you"];
var passArray = ["Your code is OK", "I suppose that was alright"];

var object = {
  table: "table"
};

var it = {
  isEqual: function(arg1, arg2) {
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
