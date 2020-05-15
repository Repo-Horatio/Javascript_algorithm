class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    insertNode(value) {
      let node = new TreeNode(value);
      this.children.push(node);
    }
  
    contains(value) {
      let result;
      let temp;
      function check(value, child) {
        for (let i = 0; i < child.length; i++) {
          if (child[i].value === value) {
            temp = true;
            return true;
          }
          // 다시 탐색
          if (child[i].children.length>=1) {
            check(value, child[i].children);
          }
        }
      }
      check(value, this.children);
      return temp ? true : false;
    }
  }
  
  // let processed = [];
  //     function check(value, child) {
  //       for (let i = 0; i < child.length; i++) {
  //         if (child[i].value === value) {
  //           processed.push(child[i]);
  //         }
  //         if (child[i].children.length === 0) {
  //           return;
  //         }
  //         check(value, child[i].children);
  //       }
  //     }
  //     check(value, this.children);
  //     return processed.length !== 0 ? true : false
  //   }
  //   }