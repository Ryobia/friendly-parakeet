// Assignment code here
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numeric = '1234567890';
let specialChar = '!@#$%^&*()';


function generatePassword(password) {
  let character = '';
  window.alert("Password Generator 2.0");
  let length = window.prompt("What would you like the length of your password to be? (Must be between 8 and 128)");

  if (length >= 8 && length <= 128 ) {
    console.log(length);
    function carrot() {

      let upper = window.confirm("Would you like Uppercase letters in your password?");
      let lower = window.confirm("Would you like Lowercase letters in your password?");
      let numbers = window.confirm("Would you like Numbers in your password?");
      let special = window.confirm("Would you like Special Characters in your password?");
      

      if(upper == false && numbers == false && special == false && lower == false) {
        window.alert("Please choose at least one option");
        carrot();
      }
      //This next little bit is gonna get pretty ugly but I couldn't find a better way. Trust me, I googled the crap out of it.
      else if (upper) {
        character = character.concat(uppercase);
      }

      if (lower) {
        character = character.concat(lowercase);
      }

      if (numbers) {
        character = character.concat(numeric);
      }

      if (special) {
        character = character.concat(specialChar);
      }
      
      let newPass = '';
      for (i = 0; i < length; i++) {
        let x = Math.floor(Math.random() *character.length)
        newPass += (character[x]);
      }
      
      password = newPass;

      console.log(character); 
      
      console.log(password);
      
      
    }

    carrot();
  }
  else {
  window.alert("Error: Please enter a number between 8 and 128");
  generatePassword();
  }

 return password;

};

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
