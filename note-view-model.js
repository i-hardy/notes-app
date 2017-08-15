function NoteViewer(note){
  this._currentNote = note;
};

NoteViewer.prototype.show = function () {
  return this._currentNote.print();
};




var noteViewer = new NoteViewer(new Note("hello"))

it.isEqual("hello", noteViewer.show());
