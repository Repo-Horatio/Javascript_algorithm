var bind = function(func, context) {
    let prevArgs = [].slice.call(arguments, 2);  // includes index 2, all other indexs after
    console.log('1', arguments);  // 1 [Arguments] { '0': [Function: func], '1': null, '2': '10' }
    return function() {
      console.log('2', arguments); // 2 [Arguments] { '0': '20' }
      let curArgs = [].slice.call(arguments); // closured  arguments
      let combinedArgs = [].concat(prevArgs, curArgs);
      return func.apply(context, combinedArgs); // apply(this, array)
    }
  };

var func = function(a, b){ return a * b };
var boundFunc = bind(func, null, '10');
var result = boundFunc('20');
console.log(result); // 200

// Function.prototype.bind = function(context) {
//   let func = this;
//   return func.apply(context, combinedArgs);