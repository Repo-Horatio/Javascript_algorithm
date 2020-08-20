function direction(command){
    let result;
    switch (command){
        case 'north':
          result='oh north';
          break;
        case 'south':
          result='oh south';
          break;
        case 'west':
          result='oh west';
          break;
        case 'east':
          result='oh east';
          break;
        default:
          result='north south west east, choose'
    }
    return result;
}

console.log(direction('east')); // oh east