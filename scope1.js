function check() {
    console.log(this.car)
  }
  
  const car = 'Hyundai';
  const obj1 = { car: 'Benz', check: check}
  const obj2 = { car: 'BMW', check: check}
  
  obj1.check() // Benz
  obj2.check() // BMW