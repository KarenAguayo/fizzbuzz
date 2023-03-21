import fizBuz from "./fizzBuss";

const first = document.querySelector("#numero");
const form = document.querySelector("#fizzBuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  div.innerHTML += "<p>" + fizBuz(firstNumber) + "</p>";
});
