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