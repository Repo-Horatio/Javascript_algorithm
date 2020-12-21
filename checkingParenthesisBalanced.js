

//  checkingParenthesisBalanced('[][][](){}'); // true
//  checkingParenthesisBalanced('[({{{}}})]');   // true
//  checkingParenthesisBalanced('[[(]]{)}'); // false


///// Solution 1 : checkingParenthesisBalanced('[[(]]{)}') doesn't work well.

var checkingParenthesisBalanced = function(input){
    let obj={'[':0, ']':0, '{':0, '}':0, '(':0, ')':0}
    for(let i=0 ; i<input.length ; i++){
        if(input[i]==='[' || input[i]===']' || 
        input[i]==='{' || input[i]==='}' || 
        input[i]==='(' || input[i]===')') obj[input[i]]++;

          if((input[i]===']' && obj['[']<obj[']'] ) || 
             (input[i]==='}' && obj['{']<obj['}'] ) || 
             (input[i]===')' && obj['(']<obj[')'] ) 
          ) return false;

    //     //   if( (input[i]===']' && obj['[']===obj[']'] && (obj['{']%2!==0 || obj['(']%2!==0) ) || 
    //     //       (input[i]==='}' && obj['{']===obj['}'] && (obj['[']%2!==0 || obj['(']%2!==0) ) || 
    //     //       (input[i]===')' && obj['(']===obj[')'] && (obj['{']%2!==0 || obj['[']%2!==0) ) 
    //     //   ) return false;

    //     //   if((input[i]===']' && (obj['[']<obj[']'] || obj['{']%2!==0 || obj['(']%2!==0) ) || 
    //     //      (input[i]==='}' && (obj['{']<obj['}'] || obj['[']%2!==0 || obj['(']%2!==0) ) || 
    //     //      (input[i]===')' && (obj['(']<obj[')'] || obj['{']%2!==0 || obj['[']%2!==0) ) 
    //     //   ) return false;

    //     //   if((input[i]==='[' && (obj['{']!==obj['}'] || obj['(']!==obj[')'])) ||
    //     //      (input[i]==='{' && (obj['[']!==obj[']'] || obj['(']!==obj[')'])) ||
    //     //      (input[i]==='(' && (obj['{']!==obj['}'] || obj['[']!==obj[']'])) 
    //     //   ) return false;
    // }
    }
    if(obj['['] === obj[']'] && 
    obj['{'] === obj['}'] && 
    obj['('] === obj[')']) return true;
    else return false;
}

///// Solution 2 - Reference : https://swoo1226.tistory.com/101  ,  https://repl.it/@EmilyJordan/balancedParens

var checkingParenthesisBalanced = function(input){
    let items = [];
    let parenthesis = { '[':']', '{':'}', '(':')'}
   
    for(let i = 0; i < input.length; i++) {
        if(input[i] === '(' || input[i] === '{' || input[i] === '[') {
            items.push(input[i]);
        }
        else if(input[i] === ')' || input[i] === '}' || input[i] === ']'){
            let check = items.pop()
            if(input[i] !== parenthesis[check]) return false;  
        }
    }
    if(items.length !== 0) return false;
    else return true;
};



