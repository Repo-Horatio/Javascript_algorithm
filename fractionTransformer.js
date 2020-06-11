
//  fractionTransformer(0.7) === '7/10'
 
//  fractionTransformer(5.0) === '5/1'
 
var fractionTransformer = function(number) {
  if(Number.isInteger(number)) return `${number}/1`

  let arrayed=String(number).split('.');
  let underDecimal=arrayed[1].length;
  let numerator=Number(arrayed[1])
  let denominator=Math.pow(10,underDecimal);
  
  while(numerator%2===0){
   if(denominator%2!==0){
    break;
   } else{
    if(numerator%2===0){
      numerator=numerator/2
      denominator=denominator/2
     }
   }
  }

  while(numerator%5===0){
    if(denominator%5!==0){
     break;
    } else{
       if(numerator%5===0){
       numerator=numerator/5
       denominator=denominator/5
      }
    }
   }

if(number<0) return `${Number(arrayed[0])*denominator-numerator}/${denominator}`
else if(number>=0) return `${Number(arrayed[0])*denominator+numerator}/${denominator}`

}
