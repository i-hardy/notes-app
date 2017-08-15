collectParams();
var noteList = new NoteList();

function collectParams() {
  document
    .getElementById("evil_form")
    .addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault();
      getInput();
      displayNotes();
      resetForm();
    });
};

function getInput() {
  input = document.forms[0].evil_deed.value;
  noteList.addNote(input);
};

function displayNotes() {
    document
      .getElementById("evil_plans")
      .innerHTML = ""
  noteList.noteArray().forEach(function(note) {
    document
      .getElementById("evil_plans")
      .innerHTML += "<li>" + note.print() + "</li>";
  });
};

function resetForm() {
  document
    .getElementById("evil_form")
    .reset();
};

// function getChangeHtml(id) {
//   return document.getElementById(id).innerHTML
// };
