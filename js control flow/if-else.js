// if else statement 

// let age = 10;

// if(age >= 11){
//     console.log("user can play gta");
// } else {
//     console.log("user can play mario"); //user can play mario
// }

// let num = 10;

// if(num%2 === 0){
//     console.log(num, "is even");  // 10 is even
// } else {
//     console.log(num, "is odd");
// }


// else if statement

// let mode = "gold";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if (mode === "blue"){
//     color = "dark blue";
// } else if (mode ==="red"){
//     color = "dark red";
// } else {
//     color = "white"
// }
// console.log(color);


// nested if else

var readlineSync = require('readline-sync');
let winningnumber = 10;
// let userguess = prompt("guess a number
let userguess = +readlineSync.question('guess a number ');
// console.log(typeof(userguess));
if(userguess === winningnumber){
    console.log("your guess is right");
} else {
    if(userguess < winningnumber){
        console.log("to low !!!");
    } else {
        console.log("to high !!!");
    }
} 

