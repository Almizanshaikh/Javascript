let user = {
    _age: 0, // private property (conventionally using an underscore)
    
    // Getter for age
    get age() {
      return this._age;
    },
    
    // Setter for age with validation
    set age(value) {
      if (value < 0) {
        console.log("Age cannot be negative.");
      } else {
        this._age = value;
      }
    }
  };
  
  user.age = 25;
  console.log(user.age); // Output: 25
  
  user.age = -5; // Output: Age cannot be negative.
  console.log(user.age); // Output: 25
  