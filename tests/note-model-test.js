var noteTaker = new Note("hello world");
var noteNumber = new Note("abcdefghijklmnopqrstuvwxyz")

console.log("Notes should return their text");
it.isEqual("hello world", noteTaker.print());

console.log("Notes under 20 characters shouldnt have ...");
it.isEqual("hello world", noteTaker.twentyCharPrint());

console.log("Notes above 20 characters shoudl have ...");
it.isEqual("abcdefghijklmnopqrst...", noteNumber.twentyCharPrint());
