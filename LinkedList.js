class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    addToTail(value) {
      let node = new Node(value);
      if (this.head === null) {
        this.head = node;
      }
      if (this.tail !== null) {
        this.tail.next = node;
      }
      this.tail = node;
      this.size++;
    }
  
    remove(value) {
      if (this.size === 0) {
        return false;
      }
  
      let cur = this.head;
      // head
      if (cur.value === value) {
        this.head = this.head.next;
        return cur;
      }
  
      // 중간
      while (cur.next.value !== value) {
        cur = cur.next;
      }
  
      let temp = cur.next;
      // tail
      if (temp === this.tail) {
        this.tail = cur;
        cur.next = null;
      }
      cur.next = cur.next.next;
      this.size--;
  
      return temp === null ? false : temp;
    }
  
    getNodeAt(index) {
      let count = 0;
      let cur = this.head;
      while (index !== count) {
        //break
        if (cur === null) {
          break;
        }
  
        cur = cur.next;
        count++;
      }
      return cur === null ? undefined : cur;
    }
  
    contains(value) {
      let cur = this.head;
      while (cur !== null) {
        if (cur.value === value) {
          break;
        }
        cur = cur.next;
      }
  
      if (cur !== null) {
        return true;
      } else {
        return false;
      }
    }
  
    indexOf(value) {
      let cur = this.head;
      let count = 0;
      while (cur !== null) {
        if (cur.value === value) {
          break;
        }
        cur = cur.next;
        count++;
      }
  
      if (cur !== null) {
        return count;
      } else {
        return -1;
      }
    }
  
    size() {
      return this.size;
    }
  }