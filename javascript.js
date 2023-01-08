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
//