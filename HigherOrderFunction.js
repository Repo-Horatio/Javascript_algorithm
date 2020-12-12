// HOF

const plusBy=function(N1){
    return function(N2){
        return N1+N2
    }
}

const plusByTen=plusBy(10);
console.log(plusByTen(5)); // 15