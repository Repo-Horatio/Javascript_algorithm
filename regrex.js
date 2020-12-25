
let str='100-50+60';

let separators = [' ', '+', '-'];
let items = str.split(new RegExp('[' + separators.join('') + ']', 'g'));

console.log(new RegExp('[' + separators.join('') + ']', 'g')); //  /[ +-]/g
console.log(separators.join('')); //  +-
console.log(items); // [ '100', '50', '60' ]