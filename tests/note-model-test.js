var noteTaker = new Note("hello world");

console.log("Notes should return their text");
it.isEqual("hello world", noteTaker.print());
