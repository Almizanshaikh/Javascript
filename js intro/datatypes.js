// string 
// A string representation textual data it contains a sequence of characters for example "hello"

// in js string are surrounded by quotes 

// single quotes
// double quotes 
// backticks
// for example

let firstname = 'almizan' 
console.log(firstname);    // almizan

let country = "india";
console.log(country);   // india

let car = `BMW`;
console.log(car);   //BMW

// javascript number
// In js the number types represents numeric values (both integers and floating-point number) 

// integer value (numeric values without any decimal part ex:3,74)
// floating-point value ( numeric values with decimal parts ex:3.15 -1.3)

let integer_number = 3;
console.log(integer_number);   // 3

let floating_number = 3.5;
console.log(floating_number);   // 3.5

// js bigInt 
/* bigInt is a type of number that can represent very large or very small 
integers beyond the range of the regular number data types */

// bigInt number is created by appending (n) to the end of an integer for example

let value1 = 16386538833943n;
let result1 = value1 + 1n;
console.log(result1)           // 16386538833944n

// js boolean
// a boolean data can only have one of two values true or false 
// example

let num1 = 3;
let num2 = 5;
console.log(num1<num2); // true

let num3 = 5;
let num4 = 5;
console.log(num3>num4); // false 

// js undefined
// in js undefined represents the absence of a value 

/* if a varaible is declared but the value is not assigned then 
the value of that varaible will be undefined */
// example 

let name;
console.log(name); // undefined

// js null 
// in js null represents no value or nothing
// for example

let number = null;
console.log(number); // null

/* js Symbol

A Symbol is a unique and primitive value. This data type was introduced in ES6.
When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, 
even if they have the same descriptions. For example */

// two symbols with the same description

let value2 = Symbol("don");
let value3 = Symbol("don");

console.log(value2 === value3);  // false


// Js Object
// An Object holds data in the form of key-value pairs. For example

let student = {
    firstName: "akkuu",
    lastName: null,
    class: 12,
};