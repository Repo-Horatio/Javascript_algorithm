let items=new Array(100).join('12:5').split(':')

function remove(){
    let item=items.pop();
    console.log(item)
    console.log('length', items.length);
    if(item){
        setTimeout(remove,0);
    }
};

remove();

// length 12
// 512
// length 11
// 512
// length 10
// 512
// length 9
// 512
// length 8
// 512
// length 7
// 512
// length 6
// 512
// length 5
// 512
// length 4
// 512
// length 3
// 512
// length 2
// 512
// length 1
// 12
// length 0
// undefined
// length 0