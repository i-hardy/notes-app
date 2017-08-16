var noteList = new NoteList();
noteList.addNote("hello");
noteList.addNote("second note");
noteList.addNote("third note");
var passedIndex = 1

describe("The note list contains an array of notes", function() {
  it.isArrayOfObjects(noteList.noteArray(), Note);
});

describe("The create method creates a new note object", function() {
  it.isEqual("hello", noteList.noteArray()[0].print());
});

describe("Showing notes works thanks to passing index through", function() {
  it.isEqual(noteList.showNote(passedIndex), "second note");
});
