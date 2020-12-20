var Range = function(start, end, step) {
    this.start=start;
    this.end=end;
    this.step=step;
};

Range.prototype.size = function () {
    if(this.end===undefined && this.step===undefined ) return 1;
    else if(this.step===undefined) return (Math.abs(this.end-this.start)+1)
    else return Math.abs(Math.floor((this.end-this.start)/this.step)) + 1;
};

Range.prototype.each = function (callback) {
    if(this.step===undefined && this.end===undefined) return callback(this.start)
    if(this.step===undefined && (this.start>this.end)){
        for(let i=0 ; i<this.size() ; i++){
            callback(this.start-1*i)
        }
    }
    else if(this.step===undefined) {
        for(let i=0 ; i<this.size() ; i++){
            callback(this.start+1*i)
        }
    }
    else {
        for(let i=0 ; i<this.size() ; i++){
            callback(this.start+this.step*i)
        }
    }
};

Range.prototype.includes = function (val) {
    
    if((this.step===undefined && this.end===undefined) && this.start===val) return true;
 
    let temp=[];
    if(this.step===undefined) {
        for(let i=0 ; i<this.size() ; i++){
            temp.push(this.start+1*i)
        }
    }
    else{
     for(let i=0 ; i<this.size() ; i++){
        temp.push(this.start+this.step*i)
     }
    }
    if(temp.includes(val)) return true;
    else return false;
};



