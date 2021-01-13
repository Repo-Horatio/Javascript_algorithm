function quest02(){
    if(!process.argv[2]) throw Error("You need to put an argument to use this one");
    const height=process.argv[2];
    
    for(let i=0; i<height; i++){
        let front=(height+1)/2-i;
        let dot='';
        // console.log(front);
        for(let d=0; d<front; d++){
            dot=dot+'\xa0'
        }
        for(let j=0; j<2*i+1; j++){
            dot += '*';      // '*'.repeat(2*i+1);
        }
        console.log(dot);
    }
}

quest02();


// node quest02.js 6
//                                *
//                               ***
//                              *****
//                             *******
//                            *********
//                           ***********