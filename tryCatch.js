try{
    unknown+1
} catch(err){
    console.log('message : '+err); // message : ReferenceError: unknown is not defined
}