class Noodle{
    constructor(name, price){
        console.log(this);
        this.name=name;
        this.price=price;
    }
    info(){
        console.log(`${this.name} is ${this.price} won`);
    }
}

class Product extends Noodle{
    constructor(name, price){
        super(name, price);
    }
    intro(){
        console.log(`${this.name} * 1 == ${this.price}`);
    }
}

const seafoodNoodle=new Product("seafood", '1500'); // Product {}
const soybeanNoodle=new Product('soybean','1200'); // Product {}

seafoodNoodle.info(); // seafood is 1500 won
seafoodNoodle.intro(); // seafood * 1 == 1500

soybeanNoodle.info(); // soybean is 1200 won
soybeanNoodle.intro(); // soybean * 1 == 1200

seafoodNoodle.appeal=function(){
    console.log(`This menu is ${this.name}`);
}

soybeanNoodle.appeal=function(){
    console.log(`This menu is ${this.name}`);
}

seafoodNoodle.appeal(); // This menus is seafood
soybeanNoodle.appeal(); // This menus is soybean