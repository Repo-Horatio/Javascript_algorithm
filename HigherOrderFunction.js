// HOF

const plusBy=function(N1){
    return function(N2){
        return N1+N2
    }
}

const plusBy1=(N1)=>(N2)=>N1+N2

const plusByTen=plusBy(10);
const plusByTen1=plusBy1(10);
console.log(plusByTen(5)); // 15
console.log(plusByTen1(5)); // 15