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

console.log(level1()()()); // a b c     a,b from memory heap, not call stack (Closure)