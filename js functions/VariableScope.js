// In JavaScript, a variable has two types of scope:

// 1. Global Scope
// 2. Local Scope

let a = "hello"; // global

function greet() {
  let b = "World"; // local
  console.log(a + b);
}

greet();
// console.log(a + b); // error: b is not defined

// block-scoped Variable

let x = "hello"; // global scope

function greet() {
  let b = "world"; // local scope

  console.log(a + " " + b);

  if (b === "world") {
    let c = "almizan"; // block scope
    console.log(a + " " + b + " " + c);
  }

  // This line is removed because 'c' is block-scoped and not accessible here
  // console.log(a + " " + b + " " + c); // error: c is not defined
}

greet();
