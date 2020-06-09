const print=(string) =>{
   setTimeout(()=>{
       console.log(string)
   }, Math.floor(Math.random()*50)+1)
}

const printThemAll=() =>{
    print("is")
    print("this")
    print("working?")
}

printThemAll() // is working? this


const prints=(string, callback)=>{
   setTimeout(()=>{
      console.log(string)
      callback()
   },
   Math.floor(Math.random()*50)+1)
   }

const printsThemAll=() => {
    prints("is", ()=>{
        prints("this", ()=>{
            prints("working?", ()=>{})
        })
    })
}

printsThemAll() // is this working?