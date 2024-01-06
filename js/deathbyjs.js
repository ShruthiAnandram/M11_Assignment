/*eslint-env browser*/

//STEP 1 - SORT THE INPUT STRING CHARACTERS IN ALPHABETICAL ORDER
//var input = window.prompt("Enter a string to arrange the characters in alphabetical order");
//
//function sortString (inputString) {
//    "use strict";
//    return inputString.split("").sort().join("");
//}
//
//window.alert("The sorted string is - " + sortString(input));


//STEP 2 - CAPITALIZE FIRST LETTER OF EVERY WORD IN THE INPUT TEXT
//var inputText = window.prompt("Enter an input text to capitalize first letters of words");
//
//function capitalize (inputString) {
//    "use strict";
//   
//    var i, joinedString = "";
//    var splitString = inputString.split(" ");
//
//    for (i = 0 ; i < splitString.length; i++) {
//        joinedString += splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1) + " ";
//        //console.log(joinedString);
//    }
//    return joinedString;
//}
//
//console.log("Capitalized first lettered words are - " + capitalize(inputText));


//STEP 3 - COUNT THE NUMBER OF VOWELS IN THE INPUT STRING - Used RegEX
//var inputText = window.prompt("Enter an input text to count the number of vowels in it");
//
//function countVowels(inputString) {
//    "use strict";
//    
//    var i, vowelCount = 0;
//    var splitString = inputString.split('');
//    var regEx = /[aeiou]/gi;
//    
//    for( i = 0; i < splitString.length; i++) {
//        if(splitString[i].match(regEx)) {
//            vowelCount += 1;
//        }
//    }
//    return vowelCount;
//}
//
//console.log("The vowel count is - " + countVowels(inputText));


//STEP 4 - STRING ID GENERATOR OF RANDOM CHARACTERS OF SPECIFIED LENGTH
//var idLength = window.prompt("Enter the length of the random character id to generate");
//var i, text = "";
//var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//for (i= 0; i < idLength; i++ ) {  
//    text += charList.charAt(Math.floor(Math.random() * charList.length));
//}
//console.log("The random character id is " + text);

//STEP 5 - LONGEST COUNTRY NAME OUT OF THE LIST OF COUNTRIES INPUT
var inputArray = ["United States of America", "India", "Chile", "Mexico"];

function longestCountryName (countriesArray) {
    var i, longestName = ''; 
    for( i = 0; i < countriesArray.length; i++ ) {
      if (countriesArray[i].length > longestName.length) {
        longestName = countriesArray[i];
      }
    }
    return longestName;
}

console.log(longestCountryName(inputArray));
