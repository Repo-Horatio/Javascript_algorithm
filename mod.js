function mod(num1, num2) {
  // your code here
  if(isNaN(num1) || isNaN(num2) || num2 === 0) return NaN;
  if(num1 === 0 ) return 0;
  let mod = Math.floor(Math.abs(num1) /Math.abs(num2));
  let result = Math.abs(num1) - (Math.abs(num2) * mod);
  if(num1 <0){
      return -1 * result;
  }else{
      return result;
  }
}

mod(101, 5) // 1
mod(100,5) // 0