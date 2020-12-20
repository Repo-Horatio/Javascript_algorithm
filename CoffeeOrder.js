function getCoffeeFromCounter(callback){
     setTimeout(function(){
        callback('cappuccino');
     }, 1000);
}

function customer(){
    return {
        num : 1,
        serveOrder: function(){
            getCoffeeFromCounter(function(menu){

                console.log(`Order Number: ${this.num}`);
                console.log(`Coffee: ${menu}`);
            }.bind(this));
        }
    }
}

let Lee = customer();
Lee.serveOrder();   // Order Number: 1  Coffee: cappuccino
