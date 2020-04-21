function fibonacciRecursive() {
  let result=0;
  let count=0
  let bool=true
  return function (){
    function fib(num, check){
      let cnt=0;
      bool=check
      if(bool===false){
        cnt=num
      } else if(bool===true){
        cnt=count
      }
      if(cnt===0){
        if(bool===true){
        count=count+1
        }
        bool=true
        return 0;
      }
      else if(cnt===1){
        if(bool===true){
        count=count+1
        }
        bool=true
        return 1;
      }
      else if(cnt>=2){
       if(bool===true){
        count=count+1
       }
       return fib(cnt-1, false)+fib(cnt-2, false)
      }
    }
    return fib(count, bool)
  }
}
/*
let closured = fibonacciRecursive();
closured(); // 0
closured(); // 1
closured(); // 1
closured(); // 2
closured(); // 3
closured(); // 5
closured(); // 8
closured(); // 13
closured(); // 21
*/