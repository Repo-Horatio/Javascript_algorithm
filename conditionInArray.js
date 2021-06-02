const items = ['wallet', 'coffee'];

let idx=2;

console.log(items[idx >= items.length ? items.length-1 : idx]); // coffee