
let Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.treefilter = function(filter) {
  let result=[];
  let depth=0;
  function traverse(tree, depth){
    if(filter(tree.value, depth)){ // true or false
     result.push(tree.value);
    }
    depth++
    for(let i=0; i<tree.children.length ; i++){
    if(tree.isDescendant(tree.children[i])) traverse(tree.children[i], depth)
   }
  }
    traverse(this, 0)
    return result;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};
