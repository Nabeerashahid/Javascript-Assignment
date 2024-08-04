               //Assignment 2
    
//Q1
// var city = prompt("Enter your city name : ");

// if(city == "karachi"){
//     document.write("Welcome to city of lights");
// }else{
//     document.write(`Welcome to ${city}`);
// }

//Q2
// var clr = prompt("Enter signal color : ");
// if(clr == "Red" || clr == "red"){
//     document.write("Must Stop");
// } else if(clr == "Yellow" || clr == "yellow"){
//     document.write("Ready To Move");
// } else if(clr == "Green" || clr == "green"){
//     document.write("Move Now");
// } else {
//     document.write("Not Signal Color");
// }

//Q3
// var a = 4;
// if (++a === 5) {
// alert("given condition for variable a is true");
// document.write("given condition for variable a is true <br>");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// document.write("given condition for variable a is true <br>");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// document.write("condition 1 is true <br>");
// }
// if (c === 13){
// alert("condition 2 is true");
// document.write("condition 2 is true <br>");
// }
// if (++c < 14){
// alert("condition 3 is true");
// document.write("condition 3 is true <br>");
// }
// if(c === 14){
// alert("condition 4 is true");
// document.write("condition 4 is true <br>");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     document.write("The cost equals <br>");
// }

// if (true){
//     alert("True");
//     document.write("True <br>");
// }
// if (false){
//     alert("False");
//     document.write("False <br>");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     document.write("car is smaller than cat <br>");
// }

//Q4
// var sub1 = parseInt(prompt("Enter chem marks :"));
// var sub2 = parseInt(prompt("Enter phy marks :"));
// var sub3 = parseInt(prompt("Enter bio marks :"));

// var total = 300;
// document.write("Total Marks : ", total ,"<br>");

// var marks = (sub1 + sub2 + sub3);
// document.write("Marks Obtained : ", marks ,"<br>");

// var per = marks/300 * 100;
// document.write("percetange : ", per ,"<br>");

// if(total >= 80){
//     document.write("Grade A1 <br> ");
//     document.write("Remarks Excellent  ");
// } else if(total >= 70){
//     document.write("Grade A  <br>");
//     document.write("Remarks Good ");
// } else if(total >= 60){
//     document.write("Grade B  <br>");
//     document.write("Remarks : You need to improve ");
// } else{
//     document.write("Fail <br>");
//     document.write("Remarks : Sorry ");
// }

//Q5
// var secret_num = 4;
// var num = parseInt(prompt("Enter guess number : "));

// if(num == secret_num){
//     document.write("correct Answer!");
// }else if(num == secret_num + 1){
//     document.write("Close enough to coreect answer ");
// }
// else{
//     document.write("Wrong answer 😔");
// }

//Q6
// var num = parseInt(prompt("Enter guess number : "));
// if(num % 2 == 0){
//     document.write("Even Number");
// }
// else{
//     document.write("Odd Number");
// }

//Q7
// var First_num = parseInt(prompt("Enter a first number : "));
// var second_num = parseInt(prompt("Enter a second number : "));
// var operator = prompt("+ , - , * , / , % ");

// if (operator == "+"){
//     document.write(First_num + second_num);
// } else if (operator == "-"){
//     document.write(First_num - second_num);
// } else if (operator == "*"){
//     document.write(First_num * second_num);
// } else if (operator == "/"){
//     document.write(First_num / second_num);
// } else if (operator == "%"){
//     document.write(First_num % second_num);
// }else {
//     document.write("Invalid operator ");
// }

//Q8
// var num = parseInt(prompt("Enter a number : "));

// if(num > 0){
//     document.write("Positive number ! ");
// }else if(num < 0){
//     document.write("Negative number ! ");
// }else{
//     document.write("Zero ");
// }

//Q9
// var character = "N";
// var vowels = character === "A" || character === "E" || character === "I" || character === "O" || character === "U";

// if(vowels){
//     document.write("TRUE");
// }else{
//     document.write("FALSE");
// }

//Q10
// var pass1 = "56@43!2";
// var pass2 = prompt("Enter a password : ");
// if(pass1 == ""){
//     document.write("Plzz! Enter a password");
// }else if(pass1 == pass2){
//     document.write("Correct!");
// }else{
//     document.write("Incorrect Password!");
// }

//Q11
// var time = parseInt(prompt("Enter a time : "));

// if(time >= "0000" && time < "1200" ){
//     document.write("Good Morning!");
// } else if(time >= "1200" && time < "1700" ){
//     document.write("Good Afternoon!");
// } else if(time >= "1700" && time < "2100" ){
//     document.write("Good Evening!");
// } else if(time >= "2100" && time <= "2359" ){
//     document.write("Good night!");
// } else {
//     document.write("enter a wrong time")
// }