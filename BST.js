/* This code is not what i wrote from scratch. for studying. */

function Node(value, left, right){
  this.value = value;
  this.left = left;
  this.right = right;
}

var BST = {  // Binary Search Tree
  root: undefined,
  insert: function (value){
    if(this.root === undefined){
      this.root = new Node(value);
      return true;
    }
    var oneNodeBefore = undefined;
    var currentNode = this.root;
    while(currentNode !== undefined){
      oneNodeBefore = currentNode;
      if(currentNode.value < value){
        currentNode = currentNode.right;
      }else if(currentNode.value > value){
        currentNode = currentNode.left;
      }else{
        return false; // when the value is already included
      }
    }  // go to lowest node

    if(oneNodeBefore.value < value){
      oneNodeBefore.right = new Node(value);
    }else{
      oneNodeBefore.left = new Node(value);
    }
    return true;
  },

  search: function (value){
    var currentNode = this.root;
    while(currentNode !== undefined){
      if(currentNode.value < value){
        currentNode = currentNode.right;
      }else if(currentNode.value > value){
        currentNode = currentNode.left;
      }else{
        return true;
      }
    }
    return false;
  },

  findBiggestInLeft: function(cur){
    var oneNodeBefore = cur
    var currentNode = cur.left; //left subtree
    if(currentNode.right === undefined){
      oneNodeBefore.left = currentNode.left;
      return currentNode.value;    // delete cur.left and return the value
    }
    while(currentNode.right !== undefined){
      oneNodeBefore = currentNode;
      currentNode = currentNode.right;
    } // go to lowest right

    if(currentNode.left === undefined){
      oneNodeBefore.right = undefined;
      return currentNode.value;  // delete the node and return value of the node
    }else{
      oneNodeBefore.right = currentNode.left;  // currentNode.left exists, right node is bigger than its parent node, and sibling on the left side.
      return currentNode.value;
    }
  },

  deleteValue: function(value){
    if(this.root === undefined){
      return false;
    }
    if(this.root.value === value){
      if(this.root.left === undefined && this.root.right === undefined){
        this.root = undefined;
      }else if(this.root.left === undefined){
        this.root = this.root.right;
      }else if(this.root.right === undefined){
        this.root = this.root.left;
      }else{   // when the root has left, right childs
        this.root = new Node(this.findBiggestInLeft(this.root),this.root.left,this.root.right);  
      }
      return true; 
    }

    var oneNodeBefore = undefined;   // when root.value is not the value we want to delete
    var currentNode = this.root;
    while(currentNode.value !== value){   // while until currentNode.value ===value
      oneNodeBefore = currentNode;
      if(currentNode.value < value){
        currentNode = currentNode.right;
      }else if(currentNode.value > value){
        currentNode = currentNode.left;
      }
      if(currentNode === undefined){
        return false;
      }
    }

    if(currentNode.left === undefined && currentNode.right === undefined){   // root.value !==value && currentNode===value
      if(oneNodeBefore.value < value){
        oneNodeBefore.right = undefined;
      }else{
        oneNodeBefore.left = undefined;
      }
    }
    
    else if(currentNode.left === undefined){
      if(oneNodeBefore.value < value){
        oneNodeBefore.right = currentNode.right;
      }else{
        oneNodeBefore.left = currentNode.right;
      }
    }
    
    else if(currentNode.right === undefined){
      if(oneNodeBefore.value < value){
        oneNodeBefore.right = currentNode.left;
      }else{
        oneNodeBefore.left = currentNode.left;
      }
    }
    
    else{    // currentNode.left, currentNode.right both exist
      if(oneNodeBefore.value < value){
        oneNodeBefore.right = new Node(this.findBiggestInLeft(currentNode),
                                    currentNode.left,
                                    currentNode.right);
      }else{
        oneNodeBefore.left = new Node(this.findBiggestInLeft(currentNode),
                                    currentNode.left,
                                    currentNode.right);
      }
    }
    return true;
  }
}

var inputs = [];
for(var i = 0; i < 100; i++){
  inputs[i] = Math.round(Math.random() * 100);
  while(!BST.insert(inputs[i])){ 
    inputs[i] = Math.round(Math.random() * 100);
  }
}
for(var i = 0; i < 50; i++){
  if(!BST.deleteValue(inputs[i])){
    console.log("ERROR: Cannot delete " + inputs[i]);
  }
}
for(var i = 0; i < 50; i++){
  if(BST.search(inputs[i])){
    console.log("ERROR: Value is still in the tree " + inputs[i]);
  }
}
for(var i = 50; i < 100; i++){
  if(!BST.search(inputs[i])){
    console.log("ERROR: Value is not in the tree" + inputs[i]);
  }
}

console.log("END");