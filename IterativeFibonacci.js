var nthFibonacci = function(n) {
  if(n===1 || n===2){
    return 1;
  }
  twobefore=1;
  onebefore=1;
  next=0;
  for(i=3 ; i<=n ; i++){
    next=twobefore+onebefore;
    twobefore=onebefore;
    onebefore=next;          
  }
  return next;
 
};
