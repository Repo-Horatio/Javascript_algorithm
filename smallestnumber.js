function smallestnumber(arr) {
  if(arr.length===0){
    return 0
  }
  let arr1=[]
  for(let i=0 ; i<arr.length ; i++){
    arr1=arr.filter(function(ar){
      return arr[i]>ar})
    if(arr1.length===0){return arr[i]}
  }
}

/*
function smallestnumber(arr) {
  let result=arr[0]
  if(arr.length<1){
    return 0
  }
  for(let i=0 ; i<arr.length ; i++){
    if(arr[i]<=result){
      result=arr[i]
    }
  } return result
}
*/

smallestnumber([111,150,20,50,100]) // 20