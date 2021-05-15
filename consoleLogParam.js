// Reference

    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise


let arr=[1, 'Macbook', 2000];

const displayItems=(item, index, array) =>{
    console.log(item, index, array);
}

arr.map(displayItems);
    // 1 0 [ 1, 'Macbook', 2000 ]
    // Macbook 1 [ 1, 'Macbook', 2000 ]
    // 2000 2 [ 1, 'Macbook', 2000 ]


    
let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Success!"); 
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);  // Yay! Success!
  });

  myFirstPromise.then(console.log);  // Success!