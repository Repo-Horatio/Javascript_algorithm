/* AVL tree - similar with Binary Search Tree,   -2 < different height between left, right subtree of a node < 2,
I didn't write this code from scratch. instead i added some notations */

function Node(val, Parent, Left, Right){
    this.value = val;
    this.parent = Parent;
    this.left = Left;
    this.right = Right;
    this.getBalance = function (){
        if(this.left !== undefined && this.right !== undefined){
            return this.left.getHeight() - this.right.getHeight();
        }else if(this.left !== undefined){  //  this.right === undefined
            return this.left.getHeight();
        }else if(this.right !== undefined){   // this.left === undefined
            return 0 - this.right.getHeight(); // '-' balance means left side is above
        }else{
            return 0;
        }
    }
    this.getHeight = function (){
        if(this.left !== undefined && this.right !== undefined){
            return 1 + Math.max(this.left.getHeight(), this.right.getHeight());  // 1 means bottom is level 1
        }else if(this.left !== undefined){
            return 1 + this.left.getHeight();
        }else if(this.right !== undefined){
            return 1 + this.right.getHeight();
        }else{
            return 1;
        }
    }
    this._setAsParent = function (Child){   // private method
        if(Child !== undefined){
            Child.parent = this;
        }
    }
    this.setLeft = function (Left){
        this._setAsParent(Left);
        this.left = Left;
    }
    this.setRight = function (Right){
        this._setAsParent(Right);
        this.right = Right;
    }
}

function AVL(){
    this.root = undefined;

    this.insert = function (val){
        if(this.root === undefined){
            this.root = new Node(val);
            return;
        }
        var cur = this.root;
        while(true){
            if(cur.value < val){
                if(cur.right !== undefined){
                    cur = cur.right;
                }else{
                    cur.setRight(new Node(val));
                    break;
                }
            }else if(cur.value > val){
                if(cur.left !== undefined){
                    cur = cur.left;
                }else{
                    cur.setLeft(new Node(val));
                    break;
                }
            }else{    // if the value is already on the tree
                return false;
            }
        }
        this.rebalance(cur);
        return true;
    }

    this.search = function (val){
        var cur = this.root;
        while(cur !== undefined){
            if(cur.value < val){
                cur = cur.right;
            }else if(cur.value > val){
                cur = cur.left;
            }else{
                return true;  // cur.value === val (low possibility)
            }
        }
        return false;  // not found
    }

    this.delete = function (val){
        var cur = this.root;
        while(cur !== undefined){
            if(cur.value < val){
                cur = cur.right;
            }else if(cur.value > val){
                cur = cur.left;
            }else{     // cur.value === val
                this.deleteNode(cur);
                return true;
            }
        }
        return false;
    }

    this.deleteNode = function(curNode){
        //case 1
        //node is a leaf
        if(curNode.left === undefined && curNode.right === undefined){
            if(curNode !== this.root){
                var Parent = curNode.parent;
                if(Parent.value < curNode.value){
                    Parent.setRight(undefined);
                }else{
                    Parent.setLeft(undefined);
                }
                this.rebalance(Parent);
            }else{
                this.root = undefined;  // no need to rebalance when it's root
            }
            return;
        }

        //case 2
        //node have one child
        if(curNode.left === undefined){
            if(curNode !== this.root){
                var Parent = curNode.parent;
                if(Parent.value < curNode.value){
                    Parent.setRight(curNode.right);
                }else{
                    Parent.setLeft(curNode.right);  // making child node of curNode to a child of parent of curNode
                }
            }else{  // curNode === this.root
                curNode.right.parent = undefined;
                this.root = curNode.right;
            }
            this.rebalance(curNode.right);
            return;
        }
        
        else if(curNode.right === undefined){
            if(curNode !== this.root){
                var Parent = curNode.parent;
                if(Parent.value < curNode.value){
                    Parent.setRight(curNode.left);
                }else{
                    Parent.setLeft(curNode.left);
                }
            }else{  // curNode === this.root
                curNode.left.parent = undefined;
                this.root = curNode.left;
            }
            this.rebalance(curNode.left);
            return;
        }

        //case 3
        // node have both childs
        if(curNode.left !== undefined && curNode.right !== undefined){
            var successor = this.getBiggestFromLeftSubtree(curNode);  // subtree of curNode
            successor.setLeft(curNode.left);
            successor.setRight(curNode.right);
            var Parent =curNode.parent;
            if(curNode !== this.root){
                if(Parent.value < curNode.value){
                    Parent.setRight(successor);
                }else{
                    Parent.setLeft(successor);
                }
            }else{ // curNode === this.root
                successor.parent = undefined;
                this.root = successor;
            }
            this.rebalance(successor);
        }
    }  // deleteNode by this point

    this.getBiggestFromLeftSubtree = function(curNode){
        var result = curNode.left;
        if(result.right === undefined){
            //no right child
            curNode.setLeft(result.left);
            return result;
        }

        while(result.right !== undefined){  // result.right !== undefined
            result = result.right;
        }

        result.parent.setRight(result.left);
        return result;
    }

    this.rebalance = function(curNode){
        var balance = curNode.getBalance();

        if(balance === 2) {
            //height left subtree is bigger by 2
            if(curNode.left.getBalance() === -1){
                curNode = this.LR(curNode);
            }else{  // curNode.left.getBalance() === 1
                curNode = this.RR(curNode);
            }
        }else if(balance === -2){
            //height of right subtree is bigger by 2
            if(curNode.right.getBalance() === 1){
                curNode = this.RL(curNode);
            }else{ // curNode.right.getBalance() === -1
                curNode = this.LL(curNode);
            }
        }

        if(curNode.parent !== undefined){ //  curNode is not the root
            this.rebalance(curNode.parent); 
        }
    } // rebalance by this point

    this.LL = function(node){
        var right = node.right;
        var parent = node.parent;

        node.setRight(right.left);
        right.setLeft(node); // now 'right' becomes on the location where the 'node' was on

        if(node !== this.root){
            if(parent.value < right.value){
                parent.setRight(right);
            }else{
                parent.setLeft(right);
            }
        }else{  // node === this.root
            right.parent = undefined;
            this.root = right;
        }
        return right;
    }

    this.RR = function(node){
        var left = node.left;
        var parent = node.parent;

        node.setLeft(left.right);  
        left.setRight(node); // now 'left' becomes on the location where the 'node' was on

        if(node !== this.root){
            if(parent.value < left.value){
                parent.setRight(left);
            }else{
                parent.setLeft(left);
            }
        }else{  // node === this.root
            left.parent = undefined;
            this.root = left;
        }
        return left;
    }

    this.RL = function(node){
        this.RR(node.right);
        return this.LL(node);
    }

    this.LR = function(node){
        this.LL(node.left);
        return this.RR(node);
    }
}

var tree = new AVL();
var Inputs = [];
for(var i = 0; i < 100; i++){
  Inputs[i] = Math.round(Math.random() * 100);
  while(!tree.insert(Inputs[i])){
    Inputs[i] = Math.round(Math.random() * 100);
  }
}
for(var i = 0; i < 50; i++){
  if(!tree.delete(Inputs[i])){
    console.log("ERROR: Cannot delete " + Inputs[i]);
  }else{
    if(tree.search(Inputs[i])){
        console.log("ERROR: Value is still in the tree " + Inputs[i]);
    }
  }
}
for(var i = 0; i < 50; i++){
  if(tree.search(Inputs[i])){
    console.log("ERROR: Value is still in the tree " + Inputs[i]);
  }
}
for(var i = 50; i < 100; i++){
  if(!tree.search(Inputs[i])){
    console.log("ERROR: Value is not in the tree" + Inputs[i]);
  }
}

console.log("END");