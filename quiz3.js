               //Assignment 3

//Q1
// var qualification = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.phil" , "PHD"];
// for (var i = 0; i < qualification.length ;i++){
//     console.log(qualification[i]);
// }


//Q2 in pdf
// var visitors_name = "John Dae";
// var product_title = "T-Shirt";
// var Quantity = 5;

// console.log(`${visitors_name} ordered ${Quantity} ${product_title} on XYZ Clothing store`);

//Q2
// var arr = ["Michael" , "John" , "Tony"];
// var score = [320 , 430 , 280];
// var total = 500;
// var per1 = 320/500 * 100;
// var per2 = 430/500 * 100;
// var per3 = 280/500 *100;

// console.log(`Score of ${arr[0]} is ${score[0]} . Percentage is ${per1}`);
// console.log(`Score of ${arr[1]} is ${score[1]} . Percentage is ${per2}`);
// console.log(`Score of ${arr[2]} is ${score[2]} . Percentage is ${per3}`);

//Q3
// var color_name = ["pink" , "blue" , "red" , "green" , "yellow"];
// console.log(color_name);

// var color = prompt("Enter color name");
// color_name.unshift(color);
// console.log("updated arrayy...");
// console.log(color_name);

// var color2 = prompt("Enter color name");
// color_name.push(color2);
// console.log("updated arrayy...");
// console.log(color_name);

// var color3 = prompt("Enter color name");
// var color4 = prompt("Enter color name");
// color_name.unshift(color3);
// color_name.unshift(color4);
// console.log("updated arrayy...");
// console.log(color_name);

// color_name.shift(color);
// console.log("updated arrayy...");
// console.log(color_name);

// color_name.pop(color);
// console.log("updated arrayy...");
// console.log(color_name);

// var index = parseInt(prompt("Enter the index : "));
// var newColor = prompt("Enter a color name " + index + ":");
// if(index >= 0){
//     color_name.splice(index , 0 , newColor);
//     console.log("updated arrayy...");
//     console.log(color_name);
// }else{
//     console.log("Invalid Index");
// }

// var index = parseInt(prompt("Enter the index : "));
// var delIndex = parseInt(prompt("How many index you want to delete : "));

// if(index >= 0 && index <= color_name.length){
//     color_name.splice(index , delIndex , color_name);
//     console.log("updated arrayy...");
//     console.log(color_name);
// }else{
//     console.log("Invalid Index");
// }

//Q4
// var city_name = ["karachi" , "lahore" , "Islamabad" , "Quetta" , "peshawar"];
// console.log(city_name);

// console.log("After copy these array.....");
// var city_list = city_name.slice(2,4);
// console.log(city_list);

//Q5
// var arr1 = [3, 'a' , 'a' , 'a' , 2 , 3 , 'a' , 3 , 'a' , 2, 4, 9 , 3];
// var arr2 = [...new Set(arr1)];
// console.log(arr2);

//Q6
// var aCities = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"];
// var o = ["th" , "st" , "nd" , "rd"];

// function getSuffix(number){
//     let lastDigit = number % 10;
//     let LastTwoDigit = number % 100;

//     if(lastDigit >= 11 && LastTwoDigit <= 13){
//         return o[0];
//     }else if(lastDigit >= 1 && LastTwoDigit <= 3){
//         return o[lastDigit];
//     }else{
//         return o[0];
//     }
// }

// for (var i = 0; i < aCities.length; i++){
//     let choiceNumber = i + 1;
//     var suffix = getSuffix(choiceNumber);
//     console.log(choiceNumber + suffix + " choice is " + aCities[i]);
// }

//Q7

// var a = [10,20,4,40,60,70];
// var b = [1,2,3,4,5,6,7,8,9,10];
// var mergedarray = [...new Set(b.concat(a))];
// console.log(mergedarray);

//Q8

//Counting...
// for(i = 1 ; i <= 15; i++){
//     console.log(i);
// }

//Reverse...
// for(i = 10 ; i >= 1; i--){
//     console.log(i);
// }

//Even...
// for(i = 0; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//Odd...
// for(i = 1; i <= 20; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

//Series
// for(i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i+"K");
//     }
// }

//Q9
// var items = [24 , 53 , 78 , 91 , 12];
// console.log(items);
// var items2 = Math.max(...items);
// console.log("The maximum number is",items2);

//Q10
//Numerical Sort.
// var A = [20 , 53, 78 , 4, 91 , 12];
// console.log(A);
// A.sort((a, b) => a-b);
// console.log(A);

//Q11
// var list = ["cake", "applepie", "cookie", "chips", "patties"];
// var search_list = prompt("What do you want to order : ");

// if(list.includes(search_list)){
//     alert(search_list + " is available in the list");
// }else{
//     alert(search_list + " is not available in the list");
// }