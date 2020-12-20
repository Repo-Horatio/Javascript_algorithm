
//  fractionTransformer(0.7) === '7/10'
 
//  fractionTransformer(5.0) === '5/1'
 
var fractionTransformer = function(number) {
  if(Number.isInteger(number)) return `${number}/1`

  let arrayed=String(number).split('.');
  let underDecimal=arrayed[1].length;   // if(arrayed[1]===undefined) {underDecimal=0; arrayed[0]=0;}
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

if(number<0) return `${Number(arrayed[0])*denominator-numerator}/${denominator}` // String(-1.05).split('.');  // ["-1", "05"]
else if(number>=0) return `${Number(arrayed[0])*denominator+numerator}/${denominator}`

}
