
var takingbus = function(name) {
  var result = {};
  result.name = name;
  result.start = function(destination) {
    return name + ' is taking a bus to ' + destination + '!';
  };
  return result;
};

var takingtaxi = function(name) {
  var result = takingbus(name);
  var takeBus = result.start;
  result.start = function(destination, dollar) {
    if(dollar < 100) {
      return takeBus(destination);
    } else {
      return name + ' is taking a taxi to ' + destination + '!';
    }
  };
  return result;
};



var Bus = function(name) {
  this.name=name;
};
Bus.prototype.start=function(destination){
 let newbus=new takingbus(this.name);
 return newbus.start(destination)
}


var Taxi = function(name) {
  this.name=name;
}
Taxi.prototype=Object.create(Bus.prototype);
Taxi.prototype.constructor=Taxi;
Taxi.prototype.start=function(destination, money){
 let newtaxi=new takingtaxi(this.name);
 return newtaxi.start(destination, money);
}




  var name = 'Christopher';
  var Chris = new takingtaxi(name);
  var destination = 'home';
  var money = 1000;
  var result = Chris.start(destination, money);
  console.log(result); // Christopher is taking a taxi to home!


  var name = 'Johnathan';
  var John = new takingtaxi(name);
  var destination = 'home';
  var money = 60;
  var result = John.start(destination, money);
  console.log(result);  // Johnathan is taking a bus to home!
