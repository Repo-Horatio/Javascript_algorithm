// #1

const hashFunction = function(str, max) {  // this hash function is from https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash % max;
  };

// #2

  const LimitedArray = function(limit) {
    const storage = [];
  
    const limitedArray = {};
    limitedArray.get = function(index) {
      checkLimit(index);
      return storage[index];
    };
    limitedArray.set = function(index, value) {
      checkLimit(index);
      storage[index] = value;
    };
    limitedArray.each = function(callback) {
      for (let i = 0; i < storage.length; i++) {
        callback(storage[i], i, storage);
      }
    };
  
    var checkLimit = function(index) {
      if (typeof index !== 'number') {
        throw new Error('the index should be a number');
      }
      if (limit <= index) {
        throw new Error('index is out of bound');
      }
    };
  
    return limitedArray;
  };



//////////// #3

  // const index = hashFunction(key, this.limit);
// storage:[bucket, bucket, bucket]
// bucket :[tuple, tuple, tuple]
// tuple :[key, value]
// let buckets=this.storage.get(index)

// buckets.forEach(bucket =>{
//   bucket.forEach(tuple=>{
//      if(tuple[0] ===key){
//         return tuple[1];  // value
//      }
//   })
// })


class HashTable {
    constructor() {
      this.size = 0;
      this.limit = 8;
      this.storage = LimitedArray(this.limit);
      this.isResizing = false;
    }
    insert(key, value) {
      const index = hashFunction(key, this.limit);
      //console.log(`${value}: ${this.size}`);
      if (!this.storage.get(index)) {
        
        this.storage.set(index, [[key, value]]);
        this.size = this.size + 1;
        
        if (this.size >= this.limit * 0.75 && !this.isResizing) {
          this.resize(this.limit * 2);
        }
      } else { // this.storage.get(index) exists
        
        for (let i = 0; i < this.storage.get(index).length; i++) {
          if (this.storage.get(index)[i][0] === key) {
            this.storage.get(index)[i][1] = value;
          }
        }
        // this.storage.get(index) exists but no key
        this.storage.get(index).push([key, value]);
        this.size = this.size + 1;
        // console.log(this.size, this.limit);
        if (this.size >= this.limit * 0.75 && !this.isResizing) {
          this.resize(this.limit * 2);
        }
      }
      //console.log(`${value} : ${this.size}, idx : ${index}`);
    }
    retrieve(key) {
      const index = hashFunction(key, this.limit);
      let bucket = this.storage.get(index);
      if (!bucket) {
        return undefined;
      } else {
        for (let i = 0; i < this.storage.get(index).length; i++) {
          if (this.storage.get(index)[i][0] === key) {
            return this.storage.get(index)[i][1];
          }
        }
      }
    }
    remove(key) {
      const index = hashFunction(key, this.limit);
      if (!this.storage.get(index)) {
        return undefined;
      }
      let removed;
      this.storage.each((element) => {
        if (element) {
          // continue only when element exists
          for (let i = 0; i < element.length; i++) {
            if (element[i][0] === key) {
              removed = element[i][1]; 
              element.splice(i, 1); // delete the element
              this.size = this.size - 1;
              if (this.size < this.limit * 0.25 && !this.isResizing) {
                this.resize(this.limit * 0.5);
              }
              return removed;
            }
          }
        }
      });
    }
    resize(newLimit) {
      let original = this.storage;
      this.limit = newLimit;
      this.storage = LimitedArray(this.limit);
      this.size = 0;
      original.each((bucket) => {
        if (!bucket) {
          return;
        }
        for (let i = 0; i < bucket.length; i++) {
          let tuple = bucket[i];
          this.insert(tuple[0], tuple[1]);
        }
      });
      this.isResizing = false;
    }
  }