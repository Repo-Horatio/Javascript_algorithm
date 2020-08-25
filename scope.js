function hi(){
    'use strict'
    console.log(this); // undefined
}

function hi1(){
    console.log(this); // global, Window
}

hi() // undefined
hi1() // // global, Window