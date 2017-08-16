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
    .innerHTML += '<li><a href=#>' + noteList.displayLastNote() + '<a/></li>';
};

function resetForm() {
  document
    .getElementById("evil_form")
    .reset();
};

function viewFullNote() {
  document
  .getElementById("evil_plans")
};

function hideForm(id) {
  document
  .getElementById(id)
  .innerHTML = "<style> #"+id+"{display:none;} </style>";
}
