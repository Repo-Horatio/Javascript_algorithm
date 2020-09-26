const multiply=(a,b)=>{
    if(a&&b){ 
        return a*b;
    }
    throw new Error('Two arguments needed');
};

try{
    console.log(multiply(5));
} catch(error){
    console.log('detected error');
    console.log(error);
}

console.log('still works'); 

// detected error
// Error: Two arguments needed
// still works