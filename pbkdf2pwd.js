const bkfd2Password=require('pbkdf2-password');
const hasher=bkfd2Password();
const assert=require('assert');

var options={password:'hi'};

hasher(options,  function(err, pass, salt, hash){
    options.salt=salt;
    hasher(options, function(err, pass, salt, hash2){
        assert.deepStrictEqual(hash2, hash);
        console.log(pass, salt, hash, hash2)
    })
});