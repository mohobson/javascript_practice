// FizzBuzz

  // Listen for FizzBuzz
  const fizzbuzzBtn = document.querySelector(".fizzbuzzBtn");
  const fizzbuzzText = document.querySelector(".fizzbuzzText");
  
  debugger;
  fizzbuzzBtn.addEventListener("click", FizzBuzz);
  
  debugger;
  function FizzBuzz() {
    // Define Fizzbuzz
    debugger;
    let fizzbuzzString = []
      // Create a count variable to 100
        for(let count=1; count <= 100; count++) {
          let entry = ""
          if (count % 3 === 0 && count % 5 === 0) {
            console.log("FizzBuzz");
            entry = entry + " FizzBuzz";
          }
  
          else if (count % 3 === 0) {  // If there is no remainder division by 3, add Fizz as a list entry
            console.log("Fizz");
            entry = entry + " Fizz";
          }
  
          else if (count % 5 === 0) {  // If there is no remainder division by 5, add Fizz as a list entry
            console.log("Fizz");
            entry = entry + " Buzz";
          }
  
          else {
            console.log(count);
            entry = count;
          }
  
          fizzbuzzString.push(entry);
        }
  
      // Return the list
  
    if (fizzbuzzBtn.textContent === "Add FizzBuzz") {
      fizzbuzzBtn.textContent = "Stop FizzBuzz";
      fizzbuzzText.textContent = `${fizzbuzzString.toString()}`;
    } else {
      fizzbuzzBtn.textContent = "Add FizzBuzz";
      fizzbuzzText.textContent = "The FizzBuzz stopped.";
    }
  }