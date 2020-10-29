const md5=require('md5');

function generator(password, salt){
    return md5(password+salt);
}