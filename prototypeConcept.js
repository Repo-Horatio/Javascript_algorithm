let apple = {
    guaranteed: true,
    promote() {
      return 'bargain starts'
    }
  }
  
  let iphone = {
    name: 'XS'
  }

  iphone.__proto__ = apple;
  console.log(iphone.guaranteed); //  true

  for(let prop in iphone){
    if(iphone.hasOwnProperty(prop)){
      console.log(prop); // name
    }
  }

  console.log(apple.isPrototypeOf(iphone)); // true
