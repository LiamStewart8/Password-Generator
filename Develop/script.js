// variables for the random generator
upperCaseLetters = "abcdefghijklmnopqrstuvwxyz" .split('');
lowerCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split('');
numberForPassword = "123456789" .split('');
symbolForPassword = "!@#$%^&*" .split('');
maxChar = 8-128;
allVals = upperCaseLetters + lowerCaseLetters + numberForPassword + symbolForPassword + maxChar;


function generatePassword(){
  var upperCaseLetters = window.confirm('Would you like uppercase letters?');
  var lowerCaseLetters = window.confirm('Would you like lowercase letters?');
  var numberForPassword = window.confirm('Would you like numbers?');
  var symbolForPassword = window.confirm('Would you like symbols?');
  var maxChar = window.prompt('How many characters would you like your password to be? Minimum:8 Maximum:128');

if (symbolForPassword, lowerCaseLetters, upperCaseLetters, numberForPassword){
  for ( i=0; i < maxChar + 1; i++){
    tempChar = Math.floor(Math.random*(maxChar))
    tempChar = allVals[tempChar]
    passwordText.append(tempChar);
  }
}
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

