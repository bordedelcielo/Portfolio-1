const buttons = document.querySelectorAll(".buttons button");
const submit = document.getElementById("submit");
const error = document.getElementById("error-msg");
const selectionMsg = document.getElementById("selection-msg");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
let selected = "";

// highlight selected rating
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeSelectedClasses();
    selected = e.target.textContent;
    e.target.classList.add("selected");
  });
});

submit.addEventListener("click", (e) => {
  if (selected === "") {
    addButtonErrors();
    setTimeout(() => {
      removeButtonErrors();
    }, 3000);
    return;
  }

  selectionMsg.textContent = `You selected ${selected} out of 5`;
  box1.classList.add("d-none");
  box2.classList.remove("d-none");
});

// error message if nothing is selected
function addButtonErrors() {
  error.classList.remove("d-none");
  buttons.forEach((btn) => {
    btn.classList.add("error");
  });
}

function removeButtonErrors() {
  error.classList.add("d-none");
  buttons.forEach((btn) => {
    btn.classList.remove("error");
  });
}

// select rating & go to thank you page
function removeSelectedClasses() {
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });
}
