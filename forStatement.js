// reference : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for

// for ([initialization]; [condition]; [final-expression])
//    statement

let arr=[];
  for(let j=0 ; j<=5 ; j++){
    for (let i = 0, len = arr.length; i<=len; i++) {
        arr.push(`${j}, total 2^${j}===${Math.pow(2,j)} items`);
    }
  }  

console.log(arr);
// [
//   '0, total 2^0===1 items',
//   '1, total 2^1===2 items',
//   '1, total 2^1===2 items',
//   '2, total 2^2===4 items',
//   '2, total 2^2===4 items',
//   '2, total 2^2===4 items',
//   '2, total 2^2===4 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '3, total 2^3===8 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '4, total 2^4===16 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items',
//   '5, total 2^5===32 items'
// ]
