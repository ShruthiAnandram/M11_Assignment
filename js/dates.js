/*eslint-env browser*/

//STEP 1 - GET THE NUMBER OF DAYS IN A MONTH
//var monthNum = window.prompt("Enter the month number to know the number of days in it");
//var days = new Date(2023, monthNum, 0).getDate();
//console.log("No of days in this month " + days);


//STEP 2 - GET THE MONTH NAME FROM THE DATE
//var dt = window.prompt("Enter the date in MM/DD/YYYY format to extract the month name");
//var date = new Date(dt);
//const monthNames = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"
//];
//
//console.log("The month name is " + monthNames[date.getMonth()]);


//STEP 3 - TEST WHETHER A DATE IS A WEEKEND
//var dt = window.prompt("Enter the date in MM/DD/YYYY format to test if its a weekend");
//var date = new Date(dt);
//if (date.getDay() === 6 || date.getDay() === 0 ) {
//    console.log("Its a weekend");
//}
//else {
//    console.log("Its a weekday");
//}


//STEP 4 - GET YESTERDAY'S DAY
//var dt = window.prompt("Enter the date in MM/DD/YYYY format to get the previous day");
//var date = new Date(dt);
//const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//console.log(dayNames[date.getDay()-1]);


//STEP 5 - GET THE CURRENT DAY OF THE WEEK
var date = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is " + dayNames[date.getDay()].charAt(0));
