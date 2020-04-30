// Instantiation Patterns

//////// Functional

var Robot = function(power=0){
    let info={};
    info.power=power;
    info.upgrade=function(){
        this.power += 1;
        console.log('power:', this.power);
        console.log('upgrade completed');
    }
    return info;
};

let robot1 = Robot();
let robot2 = Robot(5);
robot1.upgrade(); // power: 1  upgrade completed
robot2.upgrade(); // power: 6  upgrade completed

//////// Functional Shared

var transfer = function(to, from){
    for(let key in from){
        to[key]=from[key];
    }
};

var info={};
info.upgrade=function(){
    this.power +=1;
    console.log('power:', this.power);
    console.log('upgrade completed');
}

var Robot = function(power=0){
     let infos={
         power : power,
     };
     transfer(infos, info);
     return infos;
};

robot1=Robot()  
robot1.upgrade();  // power: 1  upgrade completed


//////// Prototypal

var info={};
info.upgrade=function(){
    this.power +=1;
    console.log('power:', this.power);
    console.log('upgrade completed');
}

var Robot = function(power=0){
     var infos = Object.create(info);
     infos.power=power
     return infos;
};

robot1=Robot()  
robot1.upgrade() // power: 1  upgrade completed


/////// Pseudoclassical

var Robot = function(power=0){
    this.power=power
};

Robot.prototype.upgrade = function(){
    this.power += 1;
    console.log('power:', this.power);
    console.log('upgrade completed');
};

robot1=new Robot()  
robot1.upgrade() // power: 1  upgrade completed


