function menu(appetizer, main) {
    return `${appetizer} was good, let's try ${main} now`
}

var appetizerServed = menu.bind(this, "salmon salad");
console.log(appetizerServed('beef steak')); // salmon salad was good, let's try beef steak now

