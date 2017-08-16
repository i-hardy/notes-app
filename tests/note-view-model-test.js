var noteViewer = new NoteViewer(new Note("hello"))

describe("NoteViewer should show the required note text", function(){
  it.isEqual("hello", noteViewer.show());
});
