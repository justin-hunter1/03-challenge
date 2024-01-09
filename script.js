
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

function generatePassword() {
// Declarations
  var SpecialChar = [/*' ',*/ '\!',  '\"', '\#', '\$', '\%', '\&', '\'', '\(', '\)', '\*', '\+', '\,', '\-', '\.', '\/', '\:', '\;', '\<', '\=', '\>', '\?', '\@', '\[', '\\', '\]', '\^', '\_', '\`', '\{', '\|', '\}', '\~'];
  var AlphaChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var UpperAlphaChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var NumericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var PLength = 0;
  var SelectionSC; 
  var SelectionUC;
  var SelectionLC;
  var SelectionN;
  var criteria;
  var output = [];
  var quit = false;

  
  PLength = prompt("How many characters would you like in your password? enter between 8 and 128");

// Check to see if password length is in required range
  do {
    if (PLength >= 8 && PLength <= 128) {
      quit = true;
    }
    else {
      window.alert("Invalid entry, please try again.");
      PLength = prompt("How many characters would you like in your password? enter between 8 and 128");
    }
  } while (!quit);

  quit = false;
  SelectionSC = prompt("Do you want to include Special Characters? enter yes/no or y/n");
  SelectionUC = prompt("Do you want to include Upper Case Characters? enter yes/no or y/n");
  SelectionLC = prompt("Do you want to include Lower Case Characters? enter yes/no or y/n");
  SelectionN = prompt("Do you want to include Numerials? enter yes/no or y/n");

// Check to see that a character type was selected
  do {
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'no'  && SelectionLC.toLowerCase() === 'no'  && SelectionN.toLowerCase() === 'no' ) || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'n')) {
      window.alert("You must select at least one character type to continue.");
      SelectionSC = prompt("Do you want to include Special Characters? enter yes/no or y/n");
      SelectionUC = prompt("Do you want to include Upper Case Characters? enter yes/no or y/n");
      SelectionLC = prompt("Do you want to include Lower Case Characters? enter yes/no or y/n");
      SelectionN = prompt("Do you want to include Numerials? enter yes/no or y/n");
    }
    else {
      quit = true;
    }
  } while (!quit);

// generate password from inputted password length based on the criteria selected 
  for (var i = 0; i < PLength; i++) {

// selected all possible characters
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'y'))  {
      criteria = SpecialChar.concat(AlphaChar, UpperAlphaChar, NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
      }

// selected Special Characters, Upper Case and Numbers
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'y')) {
      criteria = SpecialChar.concat(UpperAlphaChar, NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Special Characters, Lower Case and Numbers
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'y')) {
      criteria = SpecialChar.concat(AlphaChar, NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Special Characters, Upper Case and Low Case
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'n')) {
      criteria = AlphaChar.concat(UpperAlphaChar, AlphaChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Special Character only
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'n')) {
      criteria = SpecialChar;
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Upper Case only
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'n')) {
      criteria = UpperAlphaChar;
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Lower Case only
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'n')) {
      criteria = AlphaChar;
      output += criteria[getRandomInt(0, criteria.length)];
    }

//selected Number only
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'y')) {
      criteria = NumericChar;
      output += criteria[getRandomInt(0, criteria.length)];
    }
// selected Upper Case, Lower Case and Number
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'y'))  {
      criteria = UpperAlphaChar.concat(AlphaChar, NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Special Characters and Lower Case
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'n')) {
      criteria = SpecialChar.concat(AlphaChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Special Characters and Numbers
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'y')) {
      criteria = SpecialChar.concat(NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Special Characters and Upper Case
    if ((SelectionSC.toLowerCase() === 'yes' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'y' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'n')) {
      criteria = SpecialChar.concat(UpperAlphaChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Upper Case and Lower Case
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'no') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'n')) {
      criteria = UpperAlphaChar.concat(AlphaChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Upper Case and Number
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'yes' && SelectionLC.toLowerCase() === 'no' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'y' && SelectionLC.toLowerCase() === 'n' && SelectionN.toLowerCase() === 'y')) {
      criteria = UpperAlphaChar.concat(NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }

// selected Lower Case and Number
    if ((SelectionSC.toLowerCase() === 'no' && SelectionUC.toLowerCase() === 'no' && SelectionLC.toLowerCase() === 'yes' && SelectionN.toLowerCase() === 'yes') || (SelectionSC.toLowerCase() === 'n' && SelectionUC.toLowerCase() === 'n' && SelectionLC.toLowerCase() === 'y' && SelectionN.toLowerCase() === 'y')) {
      criteria = AlphaChar.concat(NumericChar);
      output += criteria[getRandomInt(0, criteria.length)];
    }
  
  }
  
  return output.toString();
}

// generator a random number between 0 and the maximum number of possible characters from choosen password criteria 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
