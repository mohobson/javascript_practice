// comment

console.log("hello")

// declare variables and assign values
let user = 'mo';
let age = '25';
let message = 'hello';

// alert(message); // hello


// exercise:
let admin;
let name = 'john';

admin = name;
// alert(admin);
//

// buttom practice
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
// end button practice

// Odin Project Fundamentals Part 3

// 1
const number = document.querySelector("#number-one");
const one = document.querySelector("#one");

number.addEventListener("input", add7);

function add7() {
  const result = parseFloat(number.value) + 7
  one.innerHTML = `<br>${number.value} + 7 = ${result}`;
  console.log(one.textContent);
  return one
}


// 2
const multipleOne = document.querySelector("#multiple-one");
const multipleTwo = document.querySelector("#multiple-two");
const two = document.querySelector('#two');

multipleOne.addEventListener("input", multiply);
multipleTwo.addEventListener("input", multiply);

function multiply() {
  const result = multipleOne.value * multipleTwo.value;
  two.innerHTML = `<br>${multipleOne.value} times ${multipleTwo.value} = ${result}`;
  console.log(two.textContent);
  return result
}


// 3
const word = document.querySelector("#capitalize-first-letter");
const capitalizeButton = document.querySelector("#change-case");
const three = document.querySelector(".three");

capitalizeButton.addEventListener("click", capitalize);
word.addEventListener("input", capitalize);

function capitalize() {
  const result = word.value.slice(0,1).toUpperCase() + word.value.slice(1).toLowerCase();
  three.innerHTML = `<br>${result}`;
  console.log(three.textContent);
  return result
}


// 4

const fullWord = document.querySelector("#return-last-letter");
const four = document.querySelector(".four");

fullWord.addEventListener("input", lastLetter);

function lastLetter() {
  const result = fullWord.value.slice(-1);
  four.innerHTML = `<br>${result}`;
  console.log(result);
  return result
}