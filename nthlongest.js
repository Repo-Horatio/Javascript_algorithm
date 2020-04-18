function nthlongest(arr, n) {
  let temp=arr
  let result=[]
  function longest(array){
    let max=array[0]
  let maxidx=0;
  for(let i=1 ; i<array.length ; i++){
    if(max.length<array[i].length){
      max=array[i]
      maxidx=i
    }
  }
  return [max, maxidx]
}
while(result.length!==n){
  let longestresult=longest(temp)
  result.push(longestresult[0])
  temp.splice(longestresult[1],1)
}
 return result[n-1]
}

// nthlongest(["hello","ipadseries","macbook","apple","notebook"], 2)