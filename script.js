// Assignment code here

var generateBtn = document.querySelector("#generate");


// Get references to the #generate element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var pwLength = prompt("set password between 8 and 128 characters. Please set password length")

  var lengthValid = parseInt(pwLength);
  console.log(lengthValid);

  if (pwLength < 8 || pwLength > 128) {
  alert("Please enter number between 8-128");
}
var charSet = [];

  var number = ['0', '1', '2', '3', '4', '5']
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


  var containsNum = confirm("Click OK to include numbers in password.");
  if (containsNum) {
  for (let i = 0; i < number.Length; i++) {
   charSet.push(number[i]) 
  }
}
var containsUpper = confirm("Click OK to include uppercase characters.");
if (containsUpper) {
  for (let i = 0; i < upperCase.length; i++) {
    charSet.push(upperCase[i])
  }
}
var containsLower = confirm("Click OK to include lowercase characters.");
if (containsLower) {
  for (let i = 0; i < lowerCase.length; i++) {
    charSet.push(lowerCase[i])
  }
}
var containsSpecialChar = confirm("Click OK to include specialChar.");
if (containsSpecialChar) {
  for (let i = 0; i < specialChar.length; i++) {
    charSet.push(specialChar[i])
  }
}
console.log(charSet)

if (charSet < 1) {
  alert("You must choose to include at least one of the password criteria to proceed.")
}

var pwOptions = "";
for (var i = 0; i < lengthValid; i++) {
  charSet[
    Math.floor(Math.random() * charSet.length)];
    pwOptions += charSet[
      Math.floor(Math.random() * charSet.length)];
 }

return pwOptions;
}

generateBtn.addEventListener("click", writePassword);
