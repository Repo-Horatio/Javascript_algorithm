// reference : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for

// for ([initialization]; [condition]; [final-expression])
//    statement

let arr=[];
  for(let j=0 ; j<3 ; j++){
    for (let i = 0, len = arr.length; i<=len; i++) {
        arr.push(`${j}, an item`);
    }
  }  

console.log(arr);
// [
//     '0, an item',
//     '1, an item',
//     '1, an item',
//     '2, an item',
//     '2, an item',
//     '2, an item',
//     '2, an item'
//   ]