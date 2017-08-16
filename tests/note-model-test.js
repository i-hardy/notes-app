var noteTaker = new Note("hello world");
var noteNumber = new Note("abcdefghijklmnopqrstuvwxyz")

console.log("Notes should return their text");
describe("Notes should return their text", function() {
  it.isEqual("hello world", noteTaker.print());
});

describe("returns the first 20 Characters and ...", function() {
  it.isEqual("abcdefghijklmnopqrst...", noteNumber.twentyCharPrint())
});
