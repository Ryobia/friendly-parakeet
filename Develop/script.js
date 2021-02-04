// Assignment code here


function generatePassword() {
  window.alert("Password Generator 2.0");
  var length = window.prompt("What would you like the length of your password to be? (Must be between 8 and 128)");

  if (length >= 8 && length <= 128 ) {
    console.log(length);
    function carrot() {

      var upper = window.confirm("Would you like Uppercase letters in your password?");
      var lower = window.confirm("Would you like Lowercase letters in your password?");
      var numbers = window.confirm("Would you like Numbers in your password?");
      var special = window.confirm("Would you like Special Characters in your password?");

      if(upper == false && numbers == false && special == false && lower == false) {
        window.alert("Please choose at least one option");
        carrot();
      }
      else {
        
      }
    }

    carrot();
  }
  else {
  window.alert("Error: Please enter a number between 8 and 128");
  generatePassword();
  }

};

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
