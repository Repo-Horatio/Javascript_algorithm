const sha256=require('sha256');

function generator(password, salt){
    return sha256(password+salt);
}