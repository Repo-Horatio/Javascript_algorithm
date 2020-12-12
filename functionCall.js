const display=new Function('item', 'return item');

console.log(display(5)); // 5

function display1(){
    return function inner(){console.log('item')};
}

display1()(); // item