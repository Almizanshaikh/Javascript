let rectangle = {
    _width: 5,
    _height: 10,
    
    // Getter for area
    get area() {
      return this._width * this._height;
    },
    
    // Getter for perimeter
    get perimeter() {
      return 2 * (this._width + this._height);
    },
    
    // Setter for dimensions
    set dimensions(dimensions) {
      [this._width, this._height] = dimensions;
    }
  };
  
  console.log(rectangle.area); // Output: 50
  console.log(rectangle.perimeter); // Output: 30
  
  rectangle.dimensions = [7, 14];
  console.log(rectangle.area); // Output: 98
  console.log(rectangle.perimeter); // Output: 42
  