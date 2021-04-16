// Immediately Invoked Function Expression

var IIFE=(function(){
    function guess(){ return 5;}
    return {guess:guess}
})()

let result=IIFE.guess()
console.log(result) // 5

let Menu;

(function (Menu) {
    Menu[Menu["APPETIZER"]=0] = "APPETIZER";
    Menu[Menu["MAIN"]=1] = "MAIN";
    Menu[Menu["DESSERT"]=2] = "DESSERT";
})(Menu || (Menu = {}));

console.log(Menu[0]); // APPETIZER
console.log(Menu['DESSERT']); // 2
console.log(Menu);  // Enumeration in typescript
// {
//     '0': 'APPETIZER',
//     '1': 'MAIN',
//     '2': 'DESSERT',
//     APPETIZER: 0,
//     MAIN: 1,
//     DESSERT: 2
// }