function extendpractice(obj1, obj2) {
  for(let property2 in obj2){
    if(!(property2 in obj1)){
      obj1[property2] = obj2[property2];
    }
  }
}

let obj1 = {
  a: 1,
  b: 2,
  c: 3
};
let obj2 = {
  b: 3,
  c: 4,
  d: 5,
  e: 6,
  f: 7
};

extendpractice(obj1, obj2);
// obj1 --> {a: 1, b: 2, c: 3, d: 5, e:6, f:7}
