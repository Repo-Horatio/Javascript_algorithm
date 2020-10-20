let obj={1:'menu1',2:'menu2',3:'menu3'};

console.log(Object.keys(obj).map(key => obj[key])); // [ 'menu1', 'menu2', 'menu3' ]