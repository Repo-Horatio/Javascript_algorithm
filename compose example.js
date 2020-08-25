const compose=(f,g)=>(a)=>f(g(a));

const square=(num)=>num**2;

console.log(compose(square, square)(5)); // 625

console.log(25**2); //625