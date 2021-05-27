function sleep(plus){
    var start = new Date().getTime();
    while (new Date().getTime() < start + plus);
    console.log('done!')
 }

let sleep1=((time) => {
     return new Promise((resolve, reject) => {
         setTimeout(()=>{
             resolve(console.log('done!')) }, time)
     })
 });

 sleep(5000);
 sleep1(5000);