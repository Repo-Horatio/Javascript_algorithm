// reference : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from

console.log(Array.from('array-like object'));
// [
//     'a', 'r', 'r', 'a', 'y',
//     '-', 'l', 'i', 'k', 'e',
//     ' ', 'o', 'b', 'j', 'e',
//     'c', 't'
//   ]
console.log(Array.from('iterable object'));
// [
//     'i', 't', 'e', 'r',
//     'a', 'b', 'l', 'e',
//     ' ', 'o', 'b', 'j',
//     'e', 'c', 't'
//   ]

console.log(Array.from('into new array'));
// [
//     'i', 'n', 't', 'o',
//     ' ', 'n', 'e', 'w',
//     ' ', 'a', 'r', 'r',
//     'a', 'y'
//   ]

console.log(Array.from([1, 2, 3], x => x + 2*x));
// expected output: Array [ 3, 6, 9 ]