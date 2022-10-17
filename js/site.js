// get values from the screen
// receiving user input
function getValues() {
  // get values
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let stopValue = document.getElementById("stopValue").value;

  // parse values
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  stopValue = parseInt(stopValue);

  // validate inputs
  if ((Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && 
      Number.isInteger(stopValue) && stopValue > 0 && stopValue <= 500)) {

    // pass in fizzValue, buzzValue, stopValue, store in fizArr
    let fizArr = generateFizzBuzz(fizzValue, buzzValue, stopValue);

    // display results on page
    displayFizzBuzz(fizArr); // pass in fizArr
    
  } else {
    Swal.fire({
      icon: "error",
      title: "Sorry...",
      text: "Values must be integers within range",
    });
  }
}

// generate fizz buzz values
function generateFizzBuzz(fizzValue, buzzValue, stopValue) {
  let numArr = [];
  let fizzWord = "Fizz";
  let buzzWord = "Buzz";
  let fizzBuzzWord = "FizzBuzz";

  // loop from 1 to user input
  for (let i = 1; i <= stopValue; i++) {
    numArr.push(i);
  }

  // loop from 0 to length of array
  for (let j = 0; j < numArr.length; j++) {
    // change the element to appropriate value
    if (numArr[j] % fizzValue == 0 && numArr[j] % buzzValue == 0) {
      numArr[j] = fizzBuzzWord;
    } else if (numArr[j] % fizzValue == 0) {
      numArr[j] = fizzWord;
    } else if (numArr[j] % buzzValue == 0) {
      numArr[j] = buzzWord;
    }
  }
  return numArr;
}

// display the generated values
function displayFizzBuzz(fizArr) {
  let templateRows = "";

  // loop from 0 to length of array
  for (let i = 0; i < fizArr.length; i++) {
    let num = fizArr[i];
    let className = "";

    // apply css
    if (num == "FizzBuzz") {
      className = "fizzbuzz";
    } else if (num == "Fizz") {
      className = "fizz";
    } else if (num == "Buzz") {
      className = "buzz";
    }

    // wraps the table
    if (i % 5 == 0) {
      templateRows += "<tr>";
    }

    templateRows += `<td class="${className}"> ${num} </td>`; // for wrap table

    if ((i + 1) % 5 == 0) {
      templateRows += "</tr>";
    }
  }

  document.getElementById("results").innerHTML = templateRows;
}