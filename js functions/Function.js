// A function is a block of code that performs a specific task.

//declaring Fucntions

function greeting(){
    console.log("hello");
    
  }
  //calling function
  greeting();//hello
  
  //functions with parameters
  
  //adding two numbers
  
  function add(num1,num2){
      console.log("Addition of two numbers is",num1+num2);
      
  }
  
  add(3,5)
  
  //function Return 
  
  function subs(num1,num2){
      return num1-num2;
  }
  
  console.log("Substraction of two numbers is :",subs(8,2));
  
  //function Expression
  function  multiply(num1,num2){
      return num1*num2;
  }
  
  const x=multiply(5,6);
  console.log("multipilcation of two numbers :",x);