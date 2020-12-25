
function generator1(string){
let storage = {};

  const recurse = (built, parts) => {
    if (built.length === string.length) {
      storage[built] = true;
    } else {
      for (let i = 0; i < parts.length; i++) {
        recurse(built + parts[i], parts.slice(0, i) + parts.slice(i+1));
      }
    }
  }

  recurse('', string);

  return Object.keys(storage);
}

function generator2(string){
  let totalLength=string.length
  var sequences = [];
  var total =string.split('')

  var generate = function(sequence, round) {
    if (round === totalLength){
       if(!sequences.includes(sequence.join(''))) sequences.push(sequence.join(''));
    } else {
      total.forEach(function(alphabet) {
        generate(sequence.concat(alphabet), round + 1);
      });
    }
  };

  generate([], 0);
  return sequences;
}

let str='aab';

console.log(generator1(str)); // [ 'aab', 'aba', 'baa' ]

console.log(generator2(str)); 
// [
//     'aaa', 'aab',
//     'aba', 'abb',
//     'baa', 'bab',
//     'bba', 'bbb'
//   ]