// variables for the random generator
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberForPassword = "0123456789";
var symbolForPassword = "!@#$%^&*";
var maxChar = [8, 128];


function generatePassword() {
  var maxChar = window.prompt('Between 8-128 how many characters would you like your password to be?');
  if (maxChar < 8 || maxChar > 128) {
    alert('It has to be within 8-128 characters. Try again.');
    return '';

  }
  var allVals = '';
  var upperCaseConfirm = window.confirm('Would you like upper case letters?');
  if (upperCaseConfirm === true) {
    allVals = allVals.concat(upperCaseLetters);
  }
  var lowerCaseConfirm = window.confirm('Would you like lower case letters?');
  if (lowerCaseConfirm === true) {
    allVals = allVals.concat(lowerCaseLetters);
  }
  var numberConfirm = window.confirm('Would you like numbers?');
  if (numberConfirm === true) {
    allVals = allVals.concat(numberForPassword);
  }
  var symbolConfirm = window.confirm('Would you like symbols?');
  if (symbolConfirm === true) {
    allVals = allVals.concat(symbolForPassword);
  }
  if (allVals === '') {
    alert('You must select atleast one character type! Try again.');
    return '';
  }
  console.log(allVals);

  // Need to make password however many characters of their choice, randomly generated from allVals.
  var generatedPassword = '';
  for (i = 0; i < maxChar; i++) {
    generatedPassword = generatedPassword.concat(allVals[Math.floor(Math.random() * allVals.length)]);

  }
  console.log(generatedPassword);
  return generatedPassword;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

