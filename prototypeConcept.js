// __proto__ is a reference or pointer to upper prototype
// Object Oriented Programming : Class based, Prototype based programming

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
  console.log(function(){}.constructor===Function); // true
  
  let arr=[];
  console.log(arr.__proto__.hasOwnProperty('map')); // true


  function multiply(a,b){
    return a*b
  }

  console.log(multiply.__proto__); // [Function]
  console.log(Function.prototype); // [Function]
  console.log(typeof Object); // function    Object constructor
  console.log(typeof {}); // object