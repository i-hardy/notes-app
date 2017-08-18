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

NoteList.prototype.displayLastNote = function () {
  return this.noteArray()[noteList._noteArray.length-1].twentyCharPrint();
};

NoteList.prototype.showIndex = function (string) {
  return this._noteArray.findIndex(function(note){
    return note.print() === string;
  });
};

NoteList.prototype.displayAllNotes = function() {
  var notes = [];
  for (i=0; i<this.noteArray().length; i++) {
    notes.push(this.showNote(i));
  };
  return notes.join("%0D");
};
