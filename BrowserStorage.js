let item={name:'iphone'}

window.localStorage.setItem('theItem', JSON.stringify(item)); // string only

window.localStorage.getItem('theItem'); // "{"name":"iphone"}"

let theItem=window.localStorage.getItem('theItem')

console.log(JSON.parse(theItem)); // {name:'iphone'}

// window.sessionStorage.setItem('key', value); // only for the tab, data will be stored
// window.sessionStorage.getItem('key')