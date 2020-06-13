// Reference : https://repl.it/@tiffanyw/toy-problem-merge-sort

  //  [6,7,6,3,15,1,2] -> [[6],[7],[6],[3],[15],[1],[2]]
 
  //  [[6],[7],[6],[3],[15],[1],[2]] -> [[6,7],[3,6],[1,15],[2]]
 
  //  [[6,7],[3,6],[1,15],[2]] -> [[3,6,6,7], [1,2,15]]

  //  [[3,6,6,7], [1,2,15]] -> [[1,2,3,6,6,7,15]]
 

  //  -----> [1,2,3,6,6,7,15]
 

var mergeSort = function(array) {
  
  const merge=(leftarr, rightarr)=>{
  let leftidx=0;
  let rightidx=0;
  let result=[];
   while(leftidx <leftarr.length && rightidx < rightarr.length){
    if(leftarr[leftidx]<rightarr[rightidx]){
       result.push(leftarr[leftidx]);
       leftidx++;
    } else{
       result.push(rightarr[rightidx])
       rightidx++;
      }
   }
   while(leftidx < leftarr.length){    // divide into two group so idx difference in maximum is 1;
     result.push(leftarr[leftidx])
     leftidx++
   }
   while(rightidx < rightarr.length){
    result.push(rightarr[rightidx])
    rightidx++
  }
   return result;
 }

 if(array.length <2) return array
  let mid=Math.floor(array.length/2);
  let left=array.slice(0, mid);
  let right=array.slice(mid);
  return merge(mergeSort(left), mergeSort(right))

};
