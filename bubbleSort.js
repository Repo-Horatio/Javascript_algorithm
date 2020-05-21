const bubbleSort = function(array) {
let flag=false;
let check=0;
let i=0;
 while(flag===false){
   if(i===array.length && check!==0){
    i=0;
    check=0;
   } 
   else if(i===array.length && check===0) {flag=true ; break;}

   if(array[i]>array[i+1]){
     let temp=array[i];
     array[i]=array[i+1];
     array[i+1]=temp;
     check++;
   }
   i++;
  }
 return array;
};

console.log(bubbleSort([1,12,5,2,6,7,56])) // [1,  2, 5, 6, 7, 12, 56]