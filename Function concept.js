const Display=new Function('item', `this.item=item`);
// function Display(item){ this.item=item; }

const ms=Display('surface');
console.log(ms.item); // SyntaxError: Unexpected identifier

const apple=new Display('Mac');
console.log(apple.item); // Mac

// 'new' keyword creates Display constructor and it constructs Display function