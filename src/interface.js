collectParams();
viewFullNote();

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
  var string = noteList.displayLastNote()
  document
    .getElementById("evil_plans")
    .innerHTML += "<li><a href='#"+noteList.showIndex(string)+"'>" +  string + "<a/></li>";
};

function resetForm() {
  document
    .getElementById("evil_form")
    .reset();
};

function viewFullNote() {
  window
  .addEventListener("hashchange", function() {
    hideForm("to_hide");
    document
    .getElementById("full_evil_note")
    .innerHTML = showOneNote();
  });
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showOneNote() {
  return noteList.showNote(getNoteFromUrl(window.location));
};

function hideForm(id) {
  document
  .getElementById(id)
  .innerHTML = "<style> #"+id+"{display:none;} </style>";
}
