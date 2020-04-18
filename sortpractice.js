var people = [
  { name: 'Jone', age: 21 },
  { name: 'Sheeren', age: 37 },
  { name: 'Ruke', age: 45 },
  { name: 'Casey', age: 20 },
  { name: 'Irene', age: 13 },
  { name: 'Tim', age: 37 }
];

// sort by age
people.sort(function (a, b) {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }
  // a must be equal to b
  return 0;
});

/*
0: {name: "Ruke", age: 45}
1: {name: "Sheeren", age: 37}
2: {name: "Tim", age: 37}
3: {name: "Jone", age: 21}
4: {name: "Casey", age: 20}
5: {name: "Irene", age: 13}
*/