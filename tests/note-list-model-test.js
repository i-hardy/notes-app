var noteList = new NoteList();
noteList.addNote("hello");
noteList.addNote("second note");
noteList.addNote("third note");
var passedIndex = 1

console.log("The note list contains an array of notes");
it.isArrayOfObjects(noteList.noteArray(), Note);
console.log("The create method creates a new note object");
it.isEqual("hello", noteList.noteArray()[0].print());
console.log("Showing notes works thanks to passing index through");
it.isEqual(noteList.showNote(passedIndex), "second note");

console.log("Display last note only");
it.isEqual("third note", noteList.displayLastNote());
