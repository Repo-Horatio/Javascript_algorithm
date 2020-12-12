console.log(typeof Infinity); // number
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof globalThis); // object

// string, boolean, number are primitive, String, Number, Boolean are object references
console.log(true.toString()); // true
console.log(Boolean(true).toString()); // true
console.log(String('true').toString()); // true

console.log(-0===+0); // true
console.log(Object.is(-0,+0)); // false