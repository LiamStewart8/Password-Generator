# Password-Generator

## Site-Picture
![Image](./assets/Passwordgen.png)

## Technologies Used
    - Javascript - Used to make the web page interactive.
    - Git - Version control system to track changes to source code.
    - GitHub - Hosts repositroy that can be deployed to GitHub pages.

## Summary
    Built the functions of a random password generator that had to meet certain criteria. These functions were all made in Javascript.



## Code Snippet
    Here is a snippit from my Javascript where I implemented my generatePassword functioin

```javascript
  function generatePassword() {
  var maxChar = window.prompt('Between 8-128 how many characters would you like your  password to be?');
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
```

## Author Links
[LinkedIn](https://www.linkedin.com/in/liamsctewart/)<br>
[Github](https://github.com/LiamStewart8)