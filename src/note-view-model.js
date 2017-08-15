function NoteViewer(note){
  this._currentNote = note;
};

NoteViewer.prototype.show = function () {
  return this._currentNote.print();
};
