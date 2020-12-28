
const binarySearch = function(array, target) {  // sorted array
    if(array[0]>target || array[array.length-1]<target) return null
  
    let startIdx=0;
    let endIdx=array.length-1;
    
    function check(start, end){
    if(start>end) return null;
    if(start===end && target===array[start]) return start;
    if(start===end && target!==array[start]) return null;
    if(array[start]===target) return start
    if(array[end]===target) return end
  
    let mid=Math.floor((start+end)/2)  // [2,3] --> mid === 2.5 --> Math.floor(2.5) === 2
    if(array[mid]===target) return mid;   
    else if(array[mid]<target){
      start=mid
      return check(start, end);
    } 
    else if(array[mid]>target){   
      end=mid
      return check(start, end);
    }
   }
   return check(startIdx, endIdx);
  };
  