function* generator(){
    console.log('invoked');
}

const gen=generator(); 

console.log('1', gen); // 1 Object [Generator] {}
console.log('2', gen.next()); // invoked   2 { value: undefined, done: true }

function* gen1(i){
    yield i*2;
    yield i*3;
}

const g1=gen1(3);
const g2=g1.next();
const g3=g1.next();
const g4=g1.next();

console.log(g2); // { value: 6, done: false }
console.log(g3); // { value: 9, done: false }
console.log(g4); // { value: undefined, done: true }