function select(arr, obj) {
    let keys = Object.keys(obj)
    let obj1={};
    Object.assign(obj1,obj)
   for(let i = 0; i <keys.length; i++){
      if(!arr.includes(keys[i])){
        delete obj1[keys[i]]
      }
    }
    return obj1
}

let search = ['a', 'b', 'z'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

select(search, obj) // {a: 1, b: 2}