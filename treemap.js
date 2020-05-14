class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    addChild(child) {
      let node = new Tree(child);
      this.children.push(node);
    }

    map(callback) {
     let treemapped = new Tree(callback(this.value));
    
    function mapping(originaltree, newone) {
      if (originaltree.children.length){
      for (let i = 0; i < originaltree.children.length; i++) {
        newone.addChild(callback(originaltree.children[i].value));
        mapping(originaltree.children[i], newone.children[i]);
      }
     }
      return newone;
     }
     return mapping(this, treemapped);
    };
  
}