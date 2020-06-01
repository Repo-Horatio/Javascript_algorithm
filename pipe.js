function pipe() {
    let args=arguments;
    return function(arg){
      let temp=args[0](arg);
      for(let i=1 ; i<args.length ; i++){
      temp=args[i](temp);
    }
    return temp;
  }
  };

// reference : https://repl.it/@davidbaek92/toy-problem-composePipe#main.js


// const pipe = function(...funcs) {
//   // really every function should return a single output so we only care about a singular arg that we pass around
//   return function(arg) {
//     console.log('arg: ', arg)
//     return funcs.reduce((input, func) => {
//       console.log('input: ', input)
//       console.log('func: ', func)
//       return func(input);
//     }, arg);
//   }