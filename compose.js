function compose() {
    let args=arguments;
    return function(arg){
      let temp=args[args.length-1](arg);
      for(let i=args.length-2 ; i>=0 ; i--){
      temp=args[i](temp);
    }
    return temp;
  }
};


// reference : https://repl.it/@davidbaek92/toy-problem-composePipe#main.js

// var compose = function() {
//   var funcs = Array.prototype.slice.call(arguments);
//   return function(arg) {
//     return funcs.reduceRight(function(item, func) {
//       return func(item);
//     }, arg);
//   };
// };