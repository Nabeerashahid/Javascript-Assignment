                       //Assignment 4

//Q1
// var City = "Hyderabad";
// var AfterCity = City.replace("Hyder" , "Islam");
// console.log(AfterCity);

//Q2
// var value = "472";
// console.log(typeof value);

// var value2 = 472;
// console.log(typeof value2);

//Q3

// function Password(password){
//     let hasLettersAndNumbers = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
//     let startWithLetter = /^[a-zA-z]/;
//     if(password.length <= 8 && hasLettersAndNumbers.test(password) && startWithLetter.test(password)){
//         return true;
        
//     }else{
//         return false;
//     }
// }

// function userprompt(){
//     var password = prompt("Enter your password : ");

//     if(Password(password)){
//         alert("Password is valid!");
        
//     }else{
//         alert("Password is not valid!");
//     }
// }
// userprompt();

//Q4

// function emailAddress(email){
//     let emailpattern = /^[^\s@]+@+[^\s@]+\.[^\s@]+$/;

//     return emailpattern.test(email)
// }

// function userprompt(){
//     let email = prompt("Enter your email : ");
//     if(emailAddress(email)){
//         alert("Valid Email");
//     }else{
//         alert("InValid Email");
//     }
// }
// userprompt();


//Q5
// var number = prompt("Enter a positive number with decimal point : ");
// console.log(parseFloat(number));

// var num = Math.round(number);
// console.log(num);

// var num1 = Math.floor(number);
// console.log(num1);

// var num2 = Math.ceil(number);
// console.log(num2);

//Q6
// var value = Math.random();
// console.log(value);

// var value2 = (value * 5);
// var dice = Math.floor(value2);
// console.log("random dice is : ",dice);

// var value3 = value2 + 2;
// var dice2 = Math.floor(value3);
// console.log("random dice is : ",dice2);

//Q7
// const string = "The quick brown fox jumps over the lazy dog";

// var wordToCount = "the";
// var stringArray = string.split(/\s+/);

// var count = stringArray.filter(word => word.toLowerCase() === wordToCount).length;
// console.log("there are " , `${count}`, "of occurance of word (the)" );

//Q8
// const ones = ["", "One" , "Two" , "Three" , "Four" , "Five" , "Six" , "Seven" , "Eight" , "Nine"];
// const teens = ["Ten" , "Eleven" , "Twelve" , "Thirteen" , "Fourteen" , "Fifteen" , "Sixteen" , "Seventeen" , "Eighteen" , "Nineteen"];
// const tens = ["" , "" , "Twenty" , "Thirty" , "Forty" , "Sixty" , "Seventy" , "Eighty" , "Ninety"];
// const thousands = ["" , "Thousand" , "Million" , "Billion"];

// function NumberToWord(num){
//     if(num == 0){
//         return false;
//     }
//     let word = '';
//     let i = 0;
//     while(num > 0){
//         let tempNum = num % 1000;
//         if(num !== 0){
//             let segment = '';
//             if(num >= 100){
//                 segment += ones[Math.floor(tempNum / 100)] + " Hundred ";
//                 tempNum %= 100;
//             }
//             if(num >= 20){
//                 segment += tens[Math.floor(tempNum / 10)] + " ";
//                 tempNum %= 10;
//             }
//             if(num >= 10 && num < 20){
//                 segment += teens[tempNum - 10] + " ";
//                 tempNum = 0;
//             }
//             if(num > 0 && num <= 10){
//                 segment += ones[tempNum] + " ";
//             }
//             word = segment + thousands[i] + " " + word;
//         }
//         num = Math.floor(num/1000);
//         i++;
//     }
//     return word.trim();
// }

// console.log(NumberToWord(23));
// console.log(NumberToWord(123));
// console.log(NumberToWord(1123));

//Q10
// var input1 = Number(prompt("Enter a number : "));
// var input2 = Number(prompt("Enter a number : "));
// var input3 = Number(prompt("Enter a number : "));


// var num1 = input1.toFixed(2);
// var num2 = input2.toFixed(2);
// var num3 = input3.toFixed(4);

// console.log(num1);
// console.log(num2);
// console.log(num3);

//Q11
// var input = (prompt("Enter a number with comma seperated : "));

// var num = input.split(",");
// num = num.map(Number);
// var mean = num.reduce((sum , num ) => sum + num , 0) / num.length;
// console.log(mean);

//Q12
// var currentDate = new Date();
// var day = currentDate.getDate();
// console.log(day);

// if(day <= 16){
//     console.log("First fifteen days of the month");
// }else{
//     console.log("Last days of the month");
// }

//Q13
// var Current_date = new Date();
// console.log(Current_date);

// var pastdate = new Date("January 1 1970 1:35:45 ");
// console.log(pastdate);

// var timeDiff = Current_date.getTime() - pastdate.getTime();
// console.log("Elapsed millisecond since January 1 1970 1:35:45 ",timeDiff);

// var minutes = (timeDiff/(1000 * 60));
// console.log("Elapsed minutes since January 1 1970 1:35:45", minutes);

//Q14
// var currentDate = new Date();
// console.log(currentDate);

// var current_hour = currentDate.getHours();
// console.log(current_hour);

// currentDate.setHours(current_hour +1);
// console.log(currentDate);

//Q15

// var age = prompt("Enter your age : ");

// var age = parseInt(age);

// console.log("My Age is : ", age);
// var Current_date = new Date();
// var current_year = Current_date.getFullYear();

// var birthyear = current_year - age;

// console.log("My birth Year is : ",birthyear);
