var noteViewer = new NoteViewer(new Note("hello"));

describe("NoteViewer", function () {
  it("should show the required note text", function () {
    expect(noteViewer.show()).toEqual("hello");
  });
});
