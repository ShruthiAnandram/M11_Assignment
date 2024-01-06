/*eslint-env browser*/

//STEP 1 - PROMPT THE USER TO INPUT NAME AND CALCULATE THE LENGTH
//var name = window.prompt("Enter your name\n");
//window.alert("The length of your name is " + name.length);

//STEP 2 - PROMPT THE USER TO ENTER NAME AND NUMBER TO FIND OUT THE CORRESPONDING LETTER
//var name = window.prompt("Enter your name\n");
//var num = window.prompt("Enter any number to find out which letter it corresponds to in your name");
//window.alert("you entered the letter " + name.charAt(num) + " in your name");

//STEP 3 - PROMPT THE USER TO ENTER FIRST AND LAST NAMES; CONCATENATE AND DISPLAY
//var firstName = window.prompt("Enter your first name\n");
//var lastName = window.prompt("Enter your last name\n");
//window.alert("Your full name is - " + firstName + " " + lastName);

//STEP 4 - FINDING THE INDEX OF WORD "FOX" IN THE SENTENCE
//var text = "The quick brown fox jumps over the lazy dog";
//window.alert("The index of the word fox is " + text.indexOf("fox"));

//STEP 5 - FINDING THE LAST INSTANCE OF THE WORD "FOX" IN THE SENTENCE
//var text = "The quick brown fox jumps over the lazy dog";
//window.alert("The last instance of the word fox is " + text.lastIndexOf("fox"));

//STEP 6 - REPLACE USER'S NAME IN PLACE OF THE SUBSTRING "THE LAZY DOG"
//var text = "The quick brown fox jumps over the lazy dog";
//var name = window.prompt("Enter your full name\n ");
//window.alert(text.replace("the lazy dog", name));

//STEP 7 - PROMPT THE USER TO ENTER A WORD IN THE SENTENCE TO SEARCH FOR ITS POSITION
//var text = "The quick brown fox jumps over the lazy dog";
//var word = window.prompt("Enter a word to search for in the text - " + text + "\n");
//window.alert("The word you are looking for begins at the position " + text.search(word));

//STEP 8 - EXTRACT A SUB-STRING FROM THE SENTENCE AND CONVERT IT INTO UPPERCASE
//var old_string = "The quick brown fox jumps over the lazy dog";
//var startIndex = old_string.indexOf("the lazy dog");
//window.alert("The extracted sub string is - " + old_string.substr(startIndex).toUpperCase());

//STEP 9 - TRIM THE LEADING AND TRAILING WHITESPACES AND CONVERT IT INTO LOWERCASE
//var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//window.alert("The trimmed text is - " + text.trim().toLowerCase());

//STEP 10 - CAPITALIZE ONLY THE FIRST LETTER IN THE SENTENCE
var text = "the quick brown fox jumps over the lazy dog";
window.alert("The capitalized first letter in the text - " + text.charAt(0).toUpperCase() + text.slice(1));
