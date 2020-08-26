const vehicle1 = {
    car: 'BMW',
    power: 1000,
    drive: function(energy) {
      this.power -= energy;
    }
  }
  
  const vehicle2 = {
    car: 'BENZ',
    power: 600
  }
  
  vehicle1.drive.call(vehicle2, 150)
  vehicle1.drive.apply(vehicle2, [150])
  console.log(vehicle2) // { car: 'BENZ', power: 300 }
  
  const vehicle2Drived = vehicle1.drive.bind(vehicle2, 200);
  console.log(vehicle2) // { car: 'BENZ', power: 300 }
  vehicle2Drived()
  console.log(vehicle2) // { car: 'BENZ', power: 100 }