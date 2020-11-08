function* generator(){
    console.log('invoked');
}

const gen=generator(); 

console.log('1', gen); // 1 Object [Generator] {}
console.log('2', gen.next()); // invoked   2 { value: undefined, done: true }