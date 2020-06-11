
var longestConsecutive = function (string) {
  if(string.length===0) return [0,0];

  let check=[];
  check.push(string[0])
  let count=1;
  for(let i=1 ; i<string.length ; i++){
    if(string[i]!==string[i-1]){
    check.push(count)
    count=1;
    check.push(string[i])
    if(i===string.length-1) check.push(count)
    }
    else if(string[i]===string[i-1]){
    count++;
    if(i===string.length-1) check.push(count)
    }
  }
 
  let max=0;
  let idx=0;
  for(let i=1 ; i<check.length ; i=i+2){
    if(check[i]>max){
      idx=i
      max=check[i]
    }
  }
  // console.log(check, max, idx)
  let temp=0;
  for(let i=1 ; i<idx ; i=i+2){
    temp=temp+check[i];
  }
  if(max===1) return [temp, temp];
  else return [temp, temp+check[idx]-1];


};
