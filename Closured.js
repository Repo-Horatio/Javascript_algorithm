function level1(){
    let item1='a';
    return function level2(){
        let item2='b';
        return function level3(){
            let item3='c';
            return `${item1} ${item2} ${item3}`
        }
    }
}

function hi(idx){
    const arr=new Array(100).fill('hi');
    console.log('done');
    return arr[idx];
}

console.log(hi(50));
console.log(hi(50));

// const levels=(level1)=>(level2)=>(level3)=>console.log(`${level1} ${level2} ${level3}`);

console.log(level1()()()); // a b c     a,b from memory heap, not call stack (Closure)