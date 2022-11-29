// Assignment code here

function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbol = "!@#$%^&*()-_=+";
  var stored = "";
  var pass = "";

  var length = Number(prompt("Choose a password length between 8-128"));
  if (length < 8 || length > 128) {
    alert("Invalid input");
  }
  var up = confirm("Would you like uppercase letters");
  if (up === true) {
    stored += upper;
  }
  var low = confirm("Would you like lowercase letters?");
  if (low === true) {
    stored += lower;
  }
  var num = confirm("Would you like numbers?");
  if (num === true) {
    stored += numbers;
  }
  var sym = confirm("Would you like symbols?");
  if (sym === true) {
    stored += symbol;
  }
  for (var i = 0; i < length; i++) {
    pass += stored[(Math.floor(Math.random() * stored.length))];
  }

  return pass;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
