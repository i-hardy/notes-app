var noteList = new NoteList();
noteList.addNote("hello");

console.log("The note list contains an array of notes");
it.isArrayOfObjects(noteList.noteArray(), Note);
console.log("The create method creates a new note object");
it.isEqual("hello", noteList.noteArray()[0].print());
