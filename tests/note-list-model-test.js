var noteList = new NoteList();
noteList.addNote("hello");
noteList.addNote("second note");
noteList.addNote("third note");
var passedIndex = 1;

describe("NoteList", function () {
  it("contains an array", function () {
    expect(noteList.noteArray()).toBeArray();
  });

  it("contains an array of objects", function () {
    noteList.noteArray().forEach(function (note) {
      expect(note).toBeObject(Note);
    });
  });

  it("can create a new note object", function () {
    expect(noteList.noteArray()[0].print()).toEqual("hello");
  });

  it("can show objects based on their index", function () {
    expect(noteList.showNote(passedIndex)).toEqual("second note");
  });

  it("can display only the last note", function () {
    expect(noteList.displayLastNote()).toEqual("third note");
  });

  it("returns the index of the note", function() {
    expect(noteList.showIndex("third note")).toEqual(2);
  });
});
