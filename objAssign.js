const key='car';

const obj={
    [key]: 'BMW',
    ['from'+' germany']:true
}

const obj1={
    car: 'Benz',
    from: 'Germany'
}
let {car, from}=obj1;

console.log(car, from); // Benz Germany
console.log(obj); // { car: 'BMW', 'from germany': true }