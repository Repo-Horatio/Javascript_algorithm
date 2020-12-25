
let str='100-50+60';

let separators = [' ', '+', '-'];
let items = str.split(new RegExp('[' + separators.join('') + ']', 'g'));

console.log(new RegExp('[' + separators.join('') + ']', 'g')); //  /[ +-]/g
console.log(separators.join('')); //  +-
console.log(items); // [ '100', '50', '60' ]


console.log(/item/.exec("this is an item")); // [ 'item', index: 11, input: 'this is an item', groups: undefined ]


let reg = new RegExp('b(a+)e', 'g')
let arr = reg.exec('abaaaae');
console.log(reg); //  /b(a+)e/g
console.log(arr); // [ 'baaaae', 'aaaa', index: 1, input: 'abaaaae', groups: undefined ]

