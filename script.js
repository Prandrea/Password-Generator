//write the generate password function that is called in "writePassword" function
function generatePassword() {
  
 // var passwordcreated = 
  return "Andrea"
}

//Create arrays for password criteria
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']', '<', '>', '.'];
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];    
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var passwordcreated = []

//Create prompts for password criteria
var passwordLength = parseInt(window.prompt ("Your password must be between 8 and 128 characters in length. Please enter password length:"));

//Ensure length is between 8-128
//if  password length 8=<  <=128 then move on to password criteria questions else alert please choose number between 8 and 128
while (passwordLength < 8 || passwordLength > 128) {
  var passwordLength = parseInt(window.prompt ("Your password must be between 8 and 128 characters in length. Please enter password length:"));
}

console.log(passwordLength)

  // Ask user for password criteria
  var includeLower = window.confirm("Would you like to include lowercase letters?");
  var includeUpper = window.confirm("Would you like to include uppercase letters?");
  var includeNumber = window.confirm("Would you like to include numbers?");
  var includeSpecial = window.confirm("Would you like to include special characters?");







//Ensure at least one character type is selected

// while (
//   !passwordInfo.lowercase &&
//   !passwordInfo.uppercase &&
//   !passwordInfo.numeric &&
//   !passwordInfo.special
// ) { alert("Choose at least one of the conditions in order to generate your password.");
// return;
// }


//generate random 
var random = Math.floor(Math.random())




//How do I take from one array and push to another array? How do I fill in the remaining spaces of the array?

//if includeLower== true then push to password array

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
