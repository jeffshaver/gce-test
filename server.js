// //
// // # SimpleServer
// //
// // A simple chat server using Socket.IO, Express, and Async.
// //
// var http = require('http');
// var express = require('express');

// //
// // ## SimpleServer `SimpleServer(obj)`
// //
// // Creates a new instance of SimpleServer with the following options:
// //  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
// //
// var router = express();
// router.get('*', function (req, res) {
//   res.send('yay')
// })
// var server = http.createServer(router);

// server.listen(process.env.PORT || 8080)

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://rest:pass@ds051873.mlab.com:51873/safe', function (err, db) {
    if (err) {
        console.log('errrrr', err)
    } else {
        console.log('db', db)
    }
})