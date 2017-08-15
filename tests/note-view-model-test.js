var noteViewer = new NoteViewer(new Note("hello"))

console.log("NoteViewer should show the required note text");
it.isEqual("hello", noteViewer.show());
