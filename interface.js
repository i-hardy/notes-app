collectParams();

function collectParams() {
  document
    .getElementById("evil_form")
    .addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault();
      getInput();
      resetForm();
    });
};

function getInput() {
  input = document.forms[0].evil_deed.value;

  document
    .getElementById("evil_plans")
    .innerHTML += "<li>" + input + "</li>";
};

function resetForm() {
  document
    .getElementById("evil_form")
    .reset();
};
