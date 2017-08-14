function NoteList() {
  this._noteArray = [];
}

NoteList.prototype.noteArray = function () {
  return this._noteArray;
};

NoteList.prototype.addNote = function (text) {
  this._noteArray.push(new Note(text));
};

var noteList = new NoteList();
noteList.addNote("hello");

it.isArrayOfObjects(noteList.noteArray(), Note);
it.isEqual("hello", noteList.noteArray()[0].print());
