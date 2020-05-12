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
  Shape.call(this); // calling constructor of parent. in class way, it is 'super()'
}

console.log(Rectangle.prototype); // {constructor: ƒ}
                                  // constructor: ƒ Rectangle()
                                  // __proto__: Object  --> prototype chain to parent object

console.log(Rectangle.prototype.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}  --> Object prototype object

// proto or [[prototype]] --> indicates parent prototype object





// child extends parent
Rectangle.prototype = Object.create(Shape.prototype);

console.log(Rectangle.prototype);  // Shape {}, no constructor property so make one and need to indicate original function used to make itself

console.log(Rectangle.prototype.__proto__); // move: ƒ (x, y)
                                            // constructor: ƒ Shape()
                                            // __proto__: Object


Rectangle.prototype.constructor = Rectangle;

console.log(Rectangle.prototype); // Shape {constructor: ƒ}
                                  // constructor: ƒ Rectangle()
                                  // __proto__: Object

console.log(Rectangle.prototype.__proto__); // {move: ƒ, constructor: ƒ}
                                            // move: ƒ (x, y)
                                            // constructor: ƒ Shape()
                                            // __proto__: Object



var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
