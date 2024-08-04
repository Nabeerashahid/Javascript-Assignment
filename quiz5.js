                //Assignment 05

//Q1
// function factorial(num){
//     if(num <= 1){
//         return 1;
//     }else {
//         return num * factorial(num - 1);
//     }
// }
// console.log(factorial(8));
// console.log(factorial(5));
// console.log(factorial(9));

//Q2
// function area(width,height){
//     return width * height;
// }
// console.log(area(2,4));

// function area(){
//     return 2 * 4;
// }
// console.log(area());

//Q3

// function ispalindrome(str){
//     var clearStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     var reverseStr = clearStr.split('').reverse().join('');

//     return clearStr === reverseStr;
// }

// var input = prompt("Enter a word of phrase : ");

// if(ispalindrome(input)){
//     console.log("The input is a palindrome.");
// }else{
//     console.log("The input is not a palindrome.");
// }

//Q4
// function calCircumference(radius){
//     return 2 * Math.PI * radius;
// }
// var input = prompt("Enter a number : ");
// var a = calCircumference(input).toFixed(2);
// console.log("The Circumference is : " , a);

// function calArea(radius){
//     return Math.PI * (radius,2);
// }
// var input = prompt("Enter a number : ");
// var a = calArea(input).toFixed(2);
// console.log("The Area is : " , a);

//Q5
// function Currency(amount){
//     amount = amount * 100;

//     var hundred = Math.floor(amount / 10000);
//     amount %= 10000;

//     var fifty =  Math.floor(amount / 5000);
//     amount %= 5000;

//     var ten =  Math.floor(amount / 1000);
//     amount %= 1000;

//     console.log("You will have " , hundred , " hundred notes " , fifty , " fifty notes " , ten , " tens notes " );

// }

// var inputamount = parseInt(prompt("Enter amount to withdraw : "));
// Currency(inputamount);

//Q6

// function mirrorArray(){
//     var arr = [0,5,6,7];
//     var arr2 = arr.slice().reverse();

//     var mirrorarray = arr.concat(arr2);
//     return mirrorarray;
// }

// console.log(mirrorArray());

// function mirrorArray2(){
//     var arr1 = [1,2,3,4];
//     var arr = arr1.slice().reverse();

//     var mirrorarray = arr1.concat(arr);
//     return mirrorarray;
// }

// console.log(mirrorArray2());

//Q7
// function daysToWeekend(datestr){
//     var formatdate = datestr.replace(/^\s/g, '');
//     var date = new Date(formatdate);

//     if(isNaN(date.getTime())){
//         return 'Invalid date format pls enter yyyy-mm-dd'
//     }
  
//     var day = date.getDay();

//     var daysUntilWeekend;
//     switch(day){
//         case 0:
//         case 6:
//             return 'Its Weekend';
//         case 1:
//             daysUntilWeekend = 5;
//             break;
//         case 2:
//             daysUntilWeekend = 4;
//             break;
//         case 3:
//             daysUntilWeekend = 3;
//             break;
//         case 4:
//             daysUntilWeekend = 2;
//             break;
//         case 5:
//             daysUntilWeekend = 1;
//             break;
//     }
//       return ` Sorry! Wait for ${daysUntilWeekend} more days`
// }

// console.log(daysToWeekend("2024-08-03"));


//Q8

// function age(birthdatestr){
//     var birh_date = new Date(birthdatestr);
//     var current_date = new Date();

//     if(isNaN(birh_date.getTime())){
//         return 'Invalid Date Format, pls Enter yyyy-mm-dd'
//     }

//     var year = current_date.getFullYear() - birh_date.getFullYear();
//     var month = current_date.getMonth() - birh_date.getMonth();
//     var day = current_date.getDate() - birh_date.getDate();

//     if(day < 0){
//         month--;
//         var Month = new Date(current_date.getFullYear() , current_date.getMonth() ,0);
//         day += Month.getDate();
//     }

//     if(month < 0){
//         year--;
//         month += 12;
//     }
//     return `${year} years ${month} months and ${day} days`;
// }
// console.log(age("2005-08-23"));

//Q9
// function CountVowels(str){
//     var vowels = 'aeiouAEIOU';
//     var count = 0;

//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(CountVowels("Nabeera Shahid"));

//Q10
// function isVowel(char){
//     char = char.toLowerCase();

//     switch(char){
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//             default:
//                 return false;
//     }
// }
// console.log(isVowel("a"));
// console.log(isVowel("b"));

//Q11

// function RandomNumber(){
//     return (Math.random() * 100) + 1;
// }

// function playGame(){
//     var randomNumber = RandomNumber();
//     var attempts = 0;
//     var userguess;
//     var maxAttempts = 3;

//     while(attempts < maxAttempts){
//         userguess = parseInt(prompt("Enter any guess number : "));

//         if(userguess === randomNumber){
//             alert("You are right..")
//             return true;
//         }else{
//             attempts++;
//             if(attempts < maxAttempts){
//                 alert("Incorrect! pls try again");
//             }
//         }
//     }
//     alert("You lose");
//     return false;
// }

// function Game(){
//     let playAgain = true;

//     while(playAgain){
//         var gameResult = playGame();

//         playAgain = confirm("if you want to play : ");
//     }
//     alert("Thankyou for playing with us today");
// }

// Game();