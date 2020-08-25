const vehicle = {
    car: 'BMW',
    drive: function() {
      console.log('1',this) // 1 { car: 'BMW', drive: [Function: drive] }
      var inFunc = function() {
        console.log('2',this)// Window
      }
    }
  }

  vehicle.drive()