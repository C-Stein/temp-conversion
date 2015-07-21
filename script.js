/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  In the HTML, have one input field where someone can enter
  in a temperature. Then have a radio button group where
  Celsius or Fahrenheit can be selected as the scale that the
  number should be converted to. Then a button that,
  when clicked, displays the converted.
*/
var num;
console.log("num is " + num);
var newNum;


function toCelsius(n) {
  console.log("num is" + num);
  newNum = (n - 32) * 5 / 9;
  console.log("newNum is " + newNum);
}

function toFahrenheit(n) {
  console.log("num is" + num);
  newNum = n * 9 / 5 + 32;
  console.log("newNum is " + newNum);
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter() {
 num = document.getElementById("num").value;
  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
  var optionChosen = document.getElementsByName("conversion_type");
  document.getElementById("answer").innerHTML = "Your new temperature is about ";
  // for loop
  for (var i = 0; i < 2; i++) {

    if (optionChosen[i].checked && optionChosen[i].value === 'celsius') {
      console.log("celsius function run");
      toCelsius(num);
      document.getElementById("units").innerHTML = " Celsius"
    } else if (optionChosen[i].checked && optionChosen[i].value === 'fahrenheit') {
      toFahrenheit(num);
      console.log("fahrenheit function run");
      document.getElementById("units").innerHTML = " Fahrenheit"
    }
  }
document.getElementById("answer").innerHTML += Math.round(newNum);
  // end for loop
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;

////////////////////////////////////////////////////////////////////////////////////////////






//document.getElementById("num").addEventListener("blur", addItem(){n  = document.getElementById("num").innerHTML;});
// This function should determine which conversion should
// happen based on which radio button is selected.

console.log(newNum);
//document.getElementById("newNum").innerHTML = newNum;
// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Assign a function to be executed when the button is clicked
button.onclick = determineConverter;