// Array of special characters to be included in password
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];

// Array of numeric characters to be included in password
var numericCharacters =["0","1","2","3","4","5","6","7","8","9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// Array of uppercase characters to be included in password
var upperCasedCharacters = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var passLength = prompt('How long would you like your password to be?', '8');

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if(passLength < 8) {
    alert('Password length must be at least 8 characters long.')
    return;
  }
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if(passLength > 128) {
    alert('Password length cannot be longer than 128 characters.')
    return;
  }
  // Variable to store boolean regarding the inclusion of special characters
  var specialCharactersConfirm = confirm('Do you want special characters in your password?');

  // Variable to store boolean regarding the inclusion of numeric characters
  var numericCharactersConfirm = confirm('Do you want any numbers in your password?');

  // Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCasedCharactersConfirm = confirm('Do you want any lowercase letters in your password?');

  // Variable to store boolean regarding the inclusion of uppercase characters
  var upperCasedCharactersConfirm = confirm('Do you want any uppercase letters in your password?');

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (specialCharactersConfirm === false, numericCharactersConfirm === false, lowerCasedCharactersConfirm === false, upperCasedCharactersConfirm === false) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input variables
  var passwordOptions = {
    passLength,
    specialCharactersConfirm,
    numericCharactersConfirm,
    lowerCasedCharactersConfirm,
    upperCasedCharactersConfirm
  };
  // Return the options object as the exported value of this function
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandomElement(charArrays) {
  // Get a random number based on the length of the array parameter
  var randIndex = Math.floor(Math.random() * charArrays.length);
  // Use the random number made to get an element out of the array
  var randElement = charArrays[randIndex];
  // Return the element
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  // Running the function to trigger the prompts and get the users answers back as an object
  var options = getPasswordOptions();
  // Array to store password as it's being concatenated 
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (options.specialCharactersConfirm === true) {
    possibleCharacters = possibleCharacters.concat(getRandomElement(specialCharacters));
    guaranteedCharacters.push(getRandomElement(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  if (options.numericCharactersConfirm === true) {
    possibleCharacters = possibleCharacters.concat(getRandomElement(numericCharacters));
    guaranteedCharacters.push(getRandomElement(numericCharacters));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (options.lowerCasedCharactersConfirm === true) {
    possibleCharacters = possibleCharacters.concat(getRandomElement(lowerCasedCharacters));
    guaranteedCharacters.push(getRandomElement(lowerCasedCharacters));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters to make at least one of the value is always included 
  if (options.upperCasedCharactersConfirm === true) {
    possibleCharacters = possibleCharacters.concat(getRandomElement(upperCasedCharacters));
    guaranteedCharacters.push(getRandomElement(upperCasedCharacters));
  }
  
  // For loop to iterate over the password length provided from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandomElement[possibleCharacters];

    result.push(possibleCharacter);
  }
  
  
  // For loop to iterate the guarenteed characters to overwrite the generated characters
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    var guaranteedCharacters = getRandomElement(guaranteedCharacters);
    result[i] = guaranteedCharacters[i];
  }

  // Join the array to make it a singular string to return 
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
