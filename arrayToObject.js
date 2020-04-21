 function arrayToObject(array) {
    let arrayed = [];
    let tempResult=[]
     for(let i=0 ; i<array.length ; i++){
      let temp= array[i].reduce(function(acc, cur){
         return acc.concat(cur)
        })
         arrayed.push(temp)
     }
     arrayed.map(function(arr){
      let obj={}
      for(let j=0; j+1<arr.length ; j=j+2){
     obj[arr[j]]=arr[j+1]
     }
     tempResult.push(obj)
     })
      
    return tempResult
    }

    let nestedArray=[
      [['firstName', 'Chris'], ['lastName', 'Martin'], ['age', 30], ['hometown', 'Vienna']],
      [['firstName', 'John'], ['lastName', 'Cena'], ['age', 29], ['hometown', 'Florida']],
      [['firstName', 'H'], ['lastName', 'Lee'], ['age', 29], ['hometown', 'Somewhere in Korea']],
    ];

arrayToObject(nestedArray)
 /*
  [
    {firstName: 'Chris', lastName: 'Martin', age: 30, hometown: 'Vienna'},
    {firstName: 'John', lastName: 'Cena', age:29, hometown: 'Florida'},
    {firstName: 'H', lastName: 'Lee', age:29, hometown: 'Somewhere in Korea'}
  ];
  */