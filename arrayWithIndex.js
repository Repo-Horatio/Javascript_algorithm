let temp=[];
for(let i=0 ; i<['abc'].length ; i++){
        temp[i]=['abc'][i];
}
console.log(temp); // [ 'abc' ]

let arr=[];
arr[5]='an item';
console.log(typeof arr[0], typeof arr[5]); //  undefined string
console.log(arr); // [ <5 empty items>, 'an item' ]