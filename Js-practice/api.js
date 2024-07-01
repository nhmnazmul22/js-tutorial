// ============= Web Form Api Start =================
const numberInput = document.getElementById("number");
const messege = document.getElementById("messege");
const submit = document.getElementById("submit");
const go = document.getElementById("go");
const back = document.getElementById("back");
const forward = document.getElementById("forward");

const checkValidati = () => {
  if (numberInput.checkValidity()) {
    console.log(numberInput.validity.valid);
    messege.innerText = "Input Ok";
  } else {
    console.log(numberInput.validity.valid);
    if (numberInput.validity.rangeOverflow) {
      messege.innerText = numberInput.validationMessage;
    }
    messege.innerText = numberInput.validationMessage;
  }
};

submit.addEventListener("click", checkValidati);

// ============= Web Form Api End =================
// ============= Web History Api Start =================

const backPage = () => {
  console.log(window.history);
};
back.addEventListener("click", backPage);
// ============= Web History Api End =================
