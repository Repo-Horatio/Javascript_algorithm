let arr=['a','b',,,[['c']]];

console.log(arr.flat(2)); // [ 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', <2 empty items>, [ [ 'c' ] ] ]

let item=arr.flatMap(i=> i+'1');

console.log(item); // [ 'a1', 'b1', 'c1' ]

let space='  here  ';
console.log(space.trimStart()); // 'here  '
console.log(space.trimEnd()); // '  here'


let lists=[['snack',2],['icecream',10]];

let obj=Object.fromEntries(lists);
console.log(obj); // { snack: 2, icecream: 10 }
let items=Object.entries(obj);
console.log(items); // [ [ 'snack', 2 ], [ 'icecream', 10 ] ]