// Immediately Invoked Function Expression

var IIFE=(function(){
    function guess(){ return 5;}
    return {guess:guess}
})()

let result=IIFE.guess()
console.log(result) // 5