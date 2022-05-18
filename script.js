//write the generate password function that is called in "writePassword" function
function generatePassword() {

//Create arrays for password criteria
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']', '<', '>', '.'];
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];    
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var passwordcreated = ['']

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
while (
   !includeLower &&
   !includeUpper &&
   !includeNumber &&
   !includeSpecial
 ) 
 { window.alert("Choose at least one of the character types in order to generate your password.");
    var includeLower = window.confirm("Would you like to include lowercase letters?");
    var includeUpper = window.confirm("Would you like to include uppercase letters?");
    var includeNumber = window.confirm("Would you like to include numbers?");
    var includeSpecial = window.confirm("Would you like to include special characters?");
   }

//Combine arrays based on selected criteria
if (includeNumber) {
  passwordcreated = numbers.concat(passwordcreated)
}
if (includeSpecial) {
  passwordcreated = special.concat(passwordcreated)
}
if (includeLower) {
  passwordcreated = lowerCase.concat(passwordcreated)
}
if (includeUpper) {
  passwordcreated = upperCase.concat(passwordcreated)
}


//use passwordcreated array to generate random password
for (var i = 0; i < passwordLength; i++){
var createRandom = Math.floor(Math.random() * passwordcreated.length);
password = password + passwordcreated[createRandom];
console.log(password);
}
return password;
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
