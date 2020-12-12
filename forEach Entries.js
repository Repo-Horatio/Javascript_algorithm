let obj={car1: 'BENZ', car2: "BMW", car3:"Hyundai"};

Object.keys(obj).forEach((key, idx)=>console.log(key, obj[key]))

// car1 BENZ
// car2 BMW
// car3 Hyundai

Object.values(obj).forEach(car=> console.log(car))

// BENZ
// BMW
// Hyundai

Object.entries(obj).forEach(car=>console.log(car))

// [ 'car1', 'BENZ' ]
// [ 'car2', 'BMW' ]
// [ 'car3', 'Hyundai' ]

Object.entries(obj).map(car=> console.log(`${car[1]} is ${car[0]}`))

// BENZ is car1
// BMW is car2
// Hyundai is car3

for (let [key, value] of Object.entries(obj)){
    console.log(`${key}: ${value}`);
}

// car1: BENZ
// car2: BMW
// car3: Hyundai