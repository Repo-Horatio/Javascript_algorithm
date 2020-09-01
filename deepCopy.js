let items=['notebook','watch'];
let copy1=[].concat(items);
let copy2=items;

copy1.push('phone');
console.log(items); // [ 'notebook', 'watch' ]
console.log(copy1); // [ 'notebook', 'watch', 'phone' ]

copy2.push('charger');
console.log(items); // [ 'notebook', 'watch', 'charger' ]
console.log(copy2); // [ 'notebook', 'watch', 'charger' ]

