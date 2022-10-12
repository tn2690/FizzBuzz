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

  if (
    Number.isInteger(fizzValue) &&
    Number.isInteger(buzzValue) &&
    Number.isInteger(stopValue)
  ) {
    // pass in fizzValue, buzzValue, store in numbers
    let fizArr = generateFizzBuzz(stopValue);

    // display results on page
    displayFizzBuzz(fizArr, fizzValue, buzzValue); // pass in numbers
  } else {
    Swal.fire({
      icon: "error",
      title: "Sorry...",
      text: "Values must be integers",
    });
  }
}

// generating fizz buzz values
function generateFizzBuzz(stopValue) {
  let numArr = [];

  let startingValue = 1;
  // let endingValue = 100;

  for (let i = startingValue; i <= stopValue; i++) {
    numArr.push(i);
  }
  return numArr;
}

// display the generated values
function displayFizzBuzz(fizArr, fizzValue, buzzValue) {
  let templateRows = "";

  for (let i = 0; i < fizArr.length; i++) {
    let num = fizArr[i];
    let className = "";

    if (num % fizzValue == 0 && num % buzzValue == 0) { // if num is divisible by fizz or buzz values
      num = "FizzBuzz";
      className = "fizzbuzz";
    } else if (num % fizzValue == 0) {
      num = "Fizz";
      className = "fizz";
    } else if (num % buzzValue == 0) {
      num = "Buzz";
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
