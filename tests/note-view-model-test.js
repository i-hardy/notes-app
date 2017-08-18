var fakeNote = mock("Note");
fakeNote.stubFunction("print", "hello");
var noteViewer = new NoteViewer(fakeNote);

describe("NoteViewer", function () {
  it("should show the required note text", function () {
    expect(noteViewer.show()).toEqual("hello");
  });
});
