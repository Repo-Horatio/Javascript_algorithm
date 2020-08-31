var car = {
    name: 'Hyundai',
    drive() {return function() {console.log(this)}}
  }
  
car.drive()() // Window
car.drive.display='Function is also an object'
console.log(car.drive.display); // Function is also an object