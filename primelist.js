function primelist(n) {
  let result=[];
  let number=0;
  
  for(let i=2; i<=n ; i++){
    let count=0;
   for(let j=2 ; j<i ; j++){
     if(i % j===0){
       count=count+1
     }
   }
   if(count===0){
     result.push(i)
   }
   }
   return result
  }

  //primelist(100) // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]