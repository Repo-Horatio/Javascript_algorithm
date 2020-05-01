class Queue {
    constructor() {
      this.data = {};
      this.front = 0;
      this.rear = 0;
    }
  
    size() {
       return this.rear - this.front;
      // return this.front - this.rear;
    }
  
    enqueue(element) {
      // rear
      this.data[this.rear] = element;
      this.rear += 1;
      // this.data[this.front]=element;
      // this.front += 1;
    }
  
    dequeue() {
      // front
      if (this.size() === 0) {
        return false;
      }
      let temp = this.data[this.front];
      delete this.data[this.front];
      this.front += 1;
      return temp;
      // if(this.size() === 0){
      //   return false;
      // }
      // let temp=this.data[this.rear];
      // delete this.data[this.rear];
      // this.rear=this.rear+1;
      // return temp;
    }
  }
  
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.dequeue(); // 1
  