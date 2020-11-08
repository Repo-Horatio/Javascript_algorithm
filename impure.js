let outscope=1;

let check=(a,b)=> outscope*a*b;

console.log(check(1,2)); // 2

console.log(check(1,2)); // 2

outscope=3;

console.log(check(1,2)); // 6
