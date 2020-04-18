function runlengthEncoding(str) {
  let temp=[]
  let result=[]
  let output=''
  let count=0;
  let i=0;
   function run(i){
     if(i===str.length-1 && str[i-1]===str[i]){
       count=count+1
       result.push(count)
       return result
     } else if(i===str.length-1 && str[i-1]!==str[i]){
       result.push(str[i],1)
       return result
     }

    if((str[i]===str[i+1] && i+1<=str.length-1)){
     
     if(i===0){
       result.push(str[i])
       i=i+1
       count=count+1
       return run(i)
     }
     else if(i>=1 && str[i-1]===str[i] && i+1<=str.length-1){
         i=i+1
         count=count+1
         return run(i)
     }

     else if(i>=1 && str[i-1]!==str[i] && i+1<=str.length-1){
      result.push(str[i])
      count=1
      i=i+1
      return run(i)
     }
    } 

    else if(str[i]!==str[i+1] && i+1<=str.length-1){
       if(i>=1 && str[i-1]===str[i] && i+1<=str.length-1){
         count=count+1
         result.push(count)
         i=i+1
         count=0
         return run(i)
       }
       else
         result.push(str[i], 1)
         i=i+1
         return run(i)
   }
  }
  
  temp = run(i);
  for(let i=0 ; i< temp.length ; i=i+2){
   output=output+temp[i+1]+temp[i]
  }
  return output
} 

// runlengthEncoding("aaaaasdjkkklfjsdfdddssdkfjlw")  -> "5a1s1d1j3k1l1f1j1s1d1f3d2s1d1k1f1j1l1w"