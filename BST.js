class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let node = new BinarySearchTree(value);

    let cur = this;
    if(this.value === node.value){
      return false;
    }

    while(cur.value !== value){
      if(cur.value < value){
        if(cur.right ===null){
          cur.right = node;
        } else
        cur = cur.right;
      }
      else if(cur.value > value){
        if(cur.left === null){
          cur.left =node ;
        } else
        cur = cur.left;
      }
    }

    
  }

  contains(value) {
    let cur = this;
    while(cur.value !== value){
      if(cur.value < value){
        if(cur.right ===null){
          break;
        } else
        cur = cur.right;
      }
      else if(cur.value > value){
        if(cur.left === null){
          break;
        } else
        cur = cur.left;
      }
    }
   if(cur.value === value){
     return true;
   } else 
   return false;


  }

  inorder(callback) {
    let cur = this;
    function traverse(node){
      if(node.left){ 
        traverse(node.left);
      }
      callback(node.value);
      if(node.right){
        traverse(node.right);
      }
    }
    traverse(cur)
    }

}
