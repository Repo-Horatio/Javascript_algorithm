const copy1=(arr)=> [...arr]; //  return [...arr];

const copy2=function(arr) {return arr.slice()};

let item=['apple','melon']

console.log(copy1(item)); // [ 'apple', 'melon' ]
console.log(copy2(item)); // [ 'apple', 'melon' ]
