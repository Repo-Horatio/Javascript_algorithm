function quest02(){
    if(!process.argv[2]) throw Error("You need to put a number type argument to use this one. for example, node quest02.js 5");
    const height=process.argv[2];
    // console.log(typeof height);  // string
    for(let i=0; i<height; i++){
        let front=(height+1)/2-i;
        let dot='';
        // console.log(front);
        for(let d=0; d<front; d++){ // dot=printing(front, ' ');
            dot=dot+'\xa0' // dot+' '
        }
        for(let j=0; j<2*i+1; j++){ // dot=printing(2*i+1, '*');
            dot += '*';      // '*'.repeat(2*i+1);
        }
        console.log(dot);
    }
}

quest02();

// function printing(num, letter){
//     let arr=new Array(num);
//     arr.fill(letter);
//     return arr.join('');  // return new Array(num).fill(letter).join('');
// }

// node quest02.js 6
//                                *
//                               ***
//                              *****
//                             *******
//                            *********
//                           ***********