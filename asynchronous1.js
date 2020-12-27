// 1. Reference : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]


/// 2. Callback -> Promise

const prints= string =>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      console.log(string)
      resolve()}, Math.floor(Math.random()*50)+1)
    })
  }

  const printsAll=()=>{
    prints("is")
    .then(()=>{
      return prints("this")
    })
    .then(() =>{
      return prints("working?")
    })
  }
  printsAll() // is this working?


  /// 3. Promise Hell

  function is(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("is")}, 500)
    })
  }

  function thiis(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("thiis")},200)
    })
  }

  function working(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("working?")},300)
    })
  }

  is()
  .then(data=>{console.log(data)
     thiis()
     .then(data=>{console.log(data)
       working()
       .then(data=>{console.log(data)
      })
    })
  })    // is thiis working?


  /// 4. Promise Chaining 

  function is(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("is")}, 500)
    })
  }

  function thiis(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("thiis")},200)
    })
  }

  function working(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("working?")},300)
    })
  }

  is()
  .then(data=>{console.log(data)
     return thiis()
  })  
  .then(data=>{console.log(data)
       return working()
  })
  .then(data=>{console.log(data)
  }) // is thiis working?


  /// 5. Async Await


    function is(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("is")}, 500)
    })
  }

  function thiis(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("thiis")},200)
    })
  }

  function working(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve("working?")},300)
    })
  }  

  const result=async () => {
     const first=await is();
     console.log(first)

     const two=await thiis();
     console.log(two)

     const three=await working();
     console.log(three)
  }

  result();  // is thiis working?


    /// 6. Promise.all

    function is(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("is")}, 500)
      })
    }
  
    function thiis(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("thiis")},200)
      })
    }
  
    function working(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("working?")},300)
      })
    }  

    Promise.all([is(), thiis(), working()]).then((values)=>{
      console.log(values); // ["is", "thiis", "working?"]
    });