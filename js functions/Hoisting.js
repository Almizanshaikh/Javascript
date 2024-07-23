// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// first
a=5;
console.log(a);
var a;

//second
var b;
b = 5;
console.log(a); // 5

// However in JavaScript, initializations are not hoisted. For example,

console.log(c);
var c=5;//undefined



// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

//hoisting in functions

greet()
function greet(){
    console.log("hello world");
    
}



