function longestString(arr) {
  if(arr.length===0){
    return ''
  }
  arr1=[]
 for(let i=0 ; i<arr.length ; i++){
  arr1=arr.filter(function(ar){
  return arr[i].length<ar.length})
  if(arr1.length===0){return arr[i]}
  }
 
}

longestString(['newspaper', 'appleproduct', 'skyscraper']) // "appleproduct"