// Reference 

    // https://nodejs.org/en/knowledge/advanced/streams/how-to-use-fs-create-read-stream/
    // http://neethack.com/2013/12/understand-node-stream-what-i-learned-when-fixing-aws-sdk-bug/
    // http://forum.falinux.com/zbxe/index.php?mid=lecture_tip&document_srl=796027

    
var http = require('http');
var fs = require('fs');
var request = require('request');
var gzip = require('zlib').createGzip();
const express = require('express');
const https = require('https');
const got = require('got');
 
const VideoUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
const strDir='./download.mp4';

var stream = request(VideoUrl);
var writeStream = fs.createWriteStream(strDir);
 
// stream.on('data', (data) => {
//     writeStream.write(data)
//   });
  
// stream.on('end', () => {
//     writeStream.end();
// });
  
// stream.on('error', (err) => {
//     console.log(`error occurred while writing stream ${err}`);
//     writeStream.close();
// });

stream.pipe(writeStream);
// stream.pipe(gzip).pipe(writeStream); // write gzipped image file

app=express(); 

let port1=3000;
let port2=8000;
 
app.get("/", (req, res) => {
    https.get(VideoUrl, (stream) => {
        stream.pipe(res);   // with pipe(), response is sent to client
    });
});
 
app.get('/video', (req, res) => {
    got.stream(VideoUrl).pipe(res);
});
 
app.listen(port1, () => {
    console.log('Express server listening on port ' + port1);
})
 
http.createServer(function(req, res) {
    
    // var URL = req.url;  // The URL is a local directory and tacks on the requested url
  
    var readStream = fs.createReadStream(strDir); // This line opens the file on local directory as a readable stream    fs.createReadStream('./1.jpg', {highWaterMark: 256});
                                                            // local directory file works with extension .mp4 .jpg etc
    // readStream.on('readable', function() {    // This will wait until we know the readable stream is actually valid before piping
    //     console.log('readable event occurred');
    // });
    readStream.on('open', function () {      
        console.log("file opened"); // everytime a file opened
    });
 
    readStream.on('data', function(chunk) {
        console.log('data event : chunk size = %d', chunk.length );
    });
 
    readStream.on('end', function() {
        console.log('end event occurred');
    });
 
    readStream.pipe(res); // This just pipes the read stream to the response object.  res.send()
 
    readStream.on('close', function() {
        console.log('close event occurred');
    });
 
    readStream.on('error', function(err) {     // This catches any errors that happen while creating the readable stream (usually invalid names)
        res.end(err);
    });
}).listen(port2, console.log(`Http server is on port ${port2}`));

// localhost:3000
// localhost:3000/video 
// localhost:8000