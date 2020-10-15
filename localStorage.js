let item={name:'iphone'}

window.localStorage.setItem('theItem', JSON.stringify(item));

window.localStorage.getItem('theItem'); // "{"name":"iphone"}"

let theItem=window.localStorage.getItem('theItem')

console.log(JSON.parse(theItem)); // {name:'iphone'}