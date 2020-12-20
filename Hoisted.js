function display() {
    console.log(x); // undefined
    var x = 10; // let x=10;  Cannot access 'x' before initialization
    console.log(x); // 10
  }
  display();