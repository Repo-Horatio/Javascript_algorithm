class Stack {
    constructor() {
      this.data = {};
      this.top = 0;
    }
  
    
    size() {
      return this.top;
    }
  
    push(element) {
      this.data[this.top]=element;
      this.top+=1;
    }
      
    pop() {
      if(this.top===0){
        return false;
      }
      else {
      let temp=this.data[this.top-1];
      delete this.data[this.top-1];
      this.top-=1;
      return temp;
    }
  }
  }
  
  let stack=new Stack();
  stack.push(1);
  stack.push(2);
  stack.size();
  stack.pop();
  stack.size();  // 1
  