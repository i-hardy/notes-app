var noteTaker = new Note("hello world");
var noteNumber = new Note("abcdefghijklmnopqrstuvwxyz");

describe("Note", function () {
  it("should return its text", function () {
    expect(noteTaker.print()).toEqual("hello world");
  });

  it("should return the whole note if it is less than 20 characters", function () {
    expect(noteTaker.twentyCharPrint()).toEqual("hello world");
  });

  it("should return longer notes with an ellipsis", function () {
    expect(noteNumber.twentyCharPrint()).toEqual("abcdefghijklmnopqrst...");
  });
});
