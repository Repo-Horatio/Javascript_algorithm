const vehicle = {
    car: 'BMW',
    drive: function() {
      console.log('1',this) // 1 { car: 'BMW', drive: [Function: drive] }
      var inFunc = function() {
        console.log('2',this)// Window
      }
    }
  }

  const vehicle1 = {
    car: 'Benz',
    drive: function() {
      console.log('1',this) // 1 { car: 'Benz', drive: [Function: drive] }
      var inFunc = () => {
        console.log('2',this)// 2 { car: 'Benz', drive: [Function: drive] }
      }
      inFunc()
    }
  }

  const vehicle2 = {
    car: 'Hyundai',
    drive: function() {
      console.log('1',this) // 1 { car: 'Hyundai', drive: [Function: drive] }
      var inFunc = () => {
        console.log('2',this)// 2 { car: 'Hyundai', drive: [Function: drive] }
      }
      return inFunc.bind(this) // Object vehicle2
    }
  }

  const vehicle3 = {
    car: 'Kia',
    drive: function() {
      console.log('1',this)  // 1 { car: 'Kia', drive: [Function: drive] }
      let self=this;
      var inFunc = () => {
        console.log('2',self) // 2 { car: 'Kia', drive: [Function: drive] } 
      }
      return inFunc
    }
  }

  vehicle.drive() //  1 { car: 'BMW', drive: [Function: drive] }

  vehicle1.drive() // 1 { car: 'Benz', drive: [Function: drive] }, 2 { car: 'Benz', drive: [Function: drive] }

  vehicle2.drive() // 1 { car: 'Hyundai', drive: [Function: drive] }

  vehicle2.drive()() // 1 { car: 'Hyundai', drive: [Function: drive] }, 2 { car: 'Hyundai', drive: [Function: drive] }

  vehicle3.drive()() // 1 { car: 'Kia', drive: [Function: drive] }, 2 { car: 'Kia', drive: [Function: drive] } 