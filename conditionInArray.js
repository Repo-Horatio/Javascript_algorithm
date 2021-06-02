const items = ['wallet', 'coffee'];

let idx=5;

console.log(items[idx > items.length ? items.length-1 : idx]); // coffee