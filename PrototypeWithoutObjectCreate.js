// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// Shape - parent
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  // parent method
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  // Rectangle - child
  function Rectangle() {
    Shape.call(this); // call constructor of parent.
  }



  Rectangle.prototype=Shape.prototype;

  console.log(Rectangle.prototype);  // {move: ƒ, constructor: ƒ}
//   move: ƒ (x, y)
//   constructor: ƒ Shape()
//   __proto__: Object

  console.log(Rectangle.prototype.constructor);
//   ƒ Shape() {
//     this.x = 0;
//     this.y = 0;
//   }



  Rectangle.prototype.constructor=Rectangle;

  console.log(Rectangle.prototype.constructor);
//   ƒ Rectangle() {
//     Shape.call(this); // call constructor of parent.
//   }

  console.log(Shape.prototype.constructor);
//   ƒ Rectangle() {    --> changed to Rectangle 
//     Shape.call(this); // call constructor of parent.
//   }
