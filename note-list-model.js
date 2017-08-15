function NoteList() {
  this._noteArray = [];
}

NoteList.prototype.noteArray = function () {
  return this._noteArray;
};

NoteList.prototype.addNote = function (text) {
  this._noteArray.push(new Note(text));
};

NoteList.prototype.showNote = function (index) {
  return new NoteViewer(this._noteArray[index]).show();
};

var noteList = new NoteList();
noteList.addNote("first note viewer");
noteList.addNote("second note");
noteList.addNote("third note");
var passedIndex = 1


it.isEqual(noteList._noteArray[0].print(), "first note viewer");
it.isEqual(noteList.showNote(passedIndex), "second note")

var noteList = new NoteList();
noteList.addNote("hello");

it.isArrayOfObjects(noteList.noteArray(), Note);
it.isEqual("hello", noteList.noteArray()[0].print());
