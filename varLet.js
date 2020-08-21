let money=100;
let entrance=false;
var entrance2=false;

if(money>50){
    let entrance=true;
    console.log('entrance1', entrance); // entrance1 true
}
console.log('entrance1', entrance); // entrance1 false

if(money>60){
    var entrance2=true;
    console.log('entrance2', entrance2); // entrance2 true
}
console.log('entrance2', entrance2); // entrance2 true
 