function sleep(plus){
    var start = new Date().getTime();
    while (new Date().getTime() < start + plus);
 }