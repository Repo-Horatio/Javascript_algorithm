function _multiply(a,b){
    return a*b;
}

module.exports=function(a,b){
    return _multiply(a,b);
}

module.exports.multiply=function(a,b){
    return a*b;
}