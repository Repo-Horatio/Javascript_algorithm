function shortestString(arr) {
  if(arr.length===0) return ''

  let result = arr.reduce((acc, cur) => {
    if (typeof(acc) !== 'string' && arr.length===0) {
      if (typeof(cur) === 'string') {
        return cur
      }
      return ''
    }

    if (typeof(cur) === 'string') {
      if (cur.length < acc.length) {
        return cur
      }
      return acc
    }
    return acc
  })
  return result
}

/*
function shortestString(arr) {
  let result='';
  for(let i=0; i < arr.length ; i++ ){
    if(typeof arr[i] === 'string' && result.length ===0 || arr[i].length < result.length){
      result=(arr[i])
    }
  }
  return result;
  }
  */

shortestString([20000000, 'Ipadseries', 100, 'Iphone', 'Listerine']); // "Iphone"