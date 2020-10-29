const bkfd2Password=require('pbkdf2-password');
const hasher=bkfd2Password();
const assert=require('assert').strict;

var options={password:'hi'};

hasher(options,  function(err, pass, salt, hash){
    options.salt=salt;
    hasher(options, function(err, pass, salt, hash2){
        try{
            assert.deepStrictEqual(hash2, hash);
            console.log('OK');
            console.log(pass, salt, hash, hash2);
        }catch(error){
            console.log("Error : ", error);
        }
    })
});