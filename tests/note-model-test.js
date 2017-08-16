var noteTaker = new Note("hello world");
var noteNumber = new Note("abcdefghijklmnopqrstuvwxyz")

console.log("Notes should return their text");
it.isEqual("hello world", noteTaker.print());

it.isEqual("abcdefghijklmnopqrst...", noteNumber.twentyCharPrint())
