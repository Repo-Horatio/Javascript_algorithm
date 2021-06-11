// Reference 

    // https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers

// The Headers() constructor creates a new Headers object.

const fetch = require('node-fetch');

// fetch('http://localhost:3000/', {
//     method: 'POST',
//     body: JSON.stringify({}),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   })

var myHeaders = new fetch.Headers();
myHeaders.append('Content-Type', 'image/jpeg');
console.log(myHeaders.get('Content-Type')); // 'image/jpeg'

var httpHeaders = { 'Content-Type' : 'application/json', };
var myHeaders = new fetch.Headers(httpHeaders);
console.log(myHeaders.get('Content-Type')); // application/json