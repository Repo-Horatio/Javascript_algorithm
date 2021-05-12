// Reference

    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign


var target = Object.defineProperty({}, 'foo', {  // Object.defineProperty(obj, prop, descriptor)
  value: 2,
  writable: false
  // enumerable: false,
  // configurable: false,
}); // target.foo is read only

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 });
// TypeError: Cannot assign to read only property 'foo' of object '#<Object>'
console.log(target.foo2); // 3
console.log(target.foo);  // 2
console.log(target.foo3); // undefined