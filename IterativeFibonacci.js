var nthFibonacci = function(n) {
  if(n===1 || n===2){
    return 1;
  }
  let twobefore=1;
  let onebefore=1;
  let next=0;
  for(let i=3 ; i<=n ; i++){
    next=twobefore+onebefore;
    twobefore=onebefore;
    onebefore=next;          
  }
  return next;
 
};
