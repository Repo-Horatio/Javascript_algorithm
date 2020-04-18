function gcd(num1, num2) {
  candidate=[];
  if(num1 >= num2){
    for(let i=1 ;  i<=num1 ; i++){
      if(Number.isInteger(num1/(i)) && Number.isInteger(num2/(i))){
         candidate.push(i);
      }
    }
    return candidate[candidate.length-1]
  } 
  else 
  for(let i=1 ;  i<=num2 ; i++){
      if(Number.isInteger(num1/(i)) && Number.isInteger(num2/(i))){
         candidate.push(i);
      }
    }
    return candidate[candidate.length-1]
}

// gcd(129, 15) --> 3