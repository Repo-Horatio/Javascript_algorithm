// reference : https://repl.it/@npahavens/treeBFSelect#index.js

let Tree = function(value) {
    this.value = value;
    this.children = [];
  };
  
  Tree.prototype.BFSelect = function(filter) {

    var result = [];
    var queue = [this];
    this.depth = 0;
  
    while (queue.length) {
      var node = queue.shift(); // the most left element
     
      if (filter(node.value)) {
        result.push(node.value);
      }
      node.children.forEach(child => {
        child.depth = node.depth + 1;
        queue.push(child);
      });
    }
    return result;
  };