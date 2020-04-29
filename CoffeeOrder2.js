function getCoffeeFromCounter(callback){
     setTimeout(function(){
        callback;
     }, 1000);
}
let num = 0;
let temp;
function customer(menu){
    num=num+1;
    temp = menu;
    return {
        serveOrder: function(){
            getCoffeeFromCounter(function(){
                console.log(`Order Number: ${num}`);
                console.log(`Coffee: ${this}`);
            }.call(temp));
        }
    }
}

Lee = customer('latte')
Lee.serveOrder()    // Order Number: 1  Coffee: latte

Kim=customer('cappuccino')
Kim.serveOrder()   // Order Number: 2  Coffee: cappuccino