var noteTaker = new Note("hello world");
var noteNumber = new Note("abcdefghijklmnopqrstuvwxyz")

console.log("Notes should return their text");
describe("Notes should return their text", function() {
  it.isEqual("hello world", noteTaker.print());
});


describe("Notes above 20 characters shoudl have ...", function() {
  it.isEqual("abcdefghijklmnopqrst...", noteNumber.twentyCharPrint())
});

describe("Notes under 20 characters shouldnt have ...", function() {
  it.isEqual("hello world", noteTaker.twentyCharPrint())
});