// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(passwordLength,upper,lower,numeric,special){
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specials = "!@#$%^&*()";
  var chars = ""; 
  if(upper == true){
    chars = chars + uppers;
  }
  if(lower == true){
    chars = chars + lowers;
  }
  if(numeric == true){
    chars = chars + numbers;
  }
  if(special == true){
    chars = chars + specials;
  }
  var passwordLength;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
   return password;
}
// Write password to the #password input
function writePassword() {
  var passwordID = document.getElementById("password");
  passwordID.readOnly = false;
  var length,upper,lower,numeric,special;
  length = prompt("how long should the password be?");
  upper = confirm("should the password have uppercases?");
  lower = confirm("should the password have lower cases?");
  numeric = confirm("should the password include numbers?");
  special = confirm("should the password include special characers?");
  if(length == false || upper == false || lower == false || numeric == false || special == false){
    alert("you dont want anything for your password?")
    alert("try again")
    return;
  }
  var password = generatePassword(length,upper,lower,numeric,special);
  alert(password);
  passwordID.innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
