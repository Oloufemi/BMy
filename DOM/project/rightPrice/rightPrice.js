// Variables
let randomValue = 0;
let inputIsValid = false;
let attempt = 0;
let userPrice;

// Select elements
let form = document.querySelector("#form");
let input = document.querySelector("#price");
let error = document.querySelector("small");
let instructionDiv = document.querySelector("#instructions");

// Hide error element
error.style.display = "none";

// Retrieve a random value
randomValue = random(11);

// Functions
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function verifyInput() {
  inputIsValid = !isNaN(input.value) ? true : false;
  error.style.display = inputIsValid ? "none" : "inline";
}

function verifyNumber(number) {
  let instruction = document.createElement("div");

  if (number > randomValue) {
    instruction.textContent = `#${attempt} (${number}) C\'est moins !`;
    instruction.className = "moins instruction";
  } else if (number < randomValue) {
    instruction.textContent = `#${attempt} (${number}) C\'est plus !`;
    instruction.className = "plus instruction";
  } else {
    instruction.textContent = `#${attempt} (${number}) Félicitation vous avez trouvé le juste prix !`;
    instruction.className = "fini instruction";
    attempt = 0;
  }
  instructionDiv.prepend(instruction);
  if (attempt === 0) {
      instructionDiv.append()
  }
}

function setParametersToDefault() {
  randomValue = random(11);
  inputIsValid = false;
  attempt = 0;
  document.querySelectorAll('.instruction').forEach((element) => {
      element.remove();
  });
}

// Retrieve form value
input.addEventListener("keyup", verifyInput);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!inputIsValid || input.value === "") {
    input.style.borderColor = "#dc3545";
  } else {
    input.style.borderColor = "#6c757d";
    attempt++;
    userPrice = input.value;
    input.value = "";
    verifyNumber(userPrice);
  }
});
