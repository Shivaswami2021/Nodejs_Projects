 //import http module in http variable
const express = require('express');//we require express to host a server
const path = require('path');
var app = express();  //assign whole express methods or modules into a variable app
const hostname = '127.0.0.1'; // the server will be hosted on ip 127.0.0.1
const port = 3000; //this server is serving the services using port:3000

//creating the server which takes request and response parameters
// const server = http.createServer((req, res) => {
//   res.statusCode = 200; //status code is use to send the msg if the connection is successfull 
//   res.setHeader('Content-Type', 'text/plain'); // header will include content-type : this is a plain text 
//   res.end('Hello World'); // the server will end the response with a msg Hello World
// });

app.use(express.static(path.resolve(__dirname,'public'))); //here we are using express method to host a filename server.js

//the server will listen to the port:3000 at ip:127.0.0.1
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); //this will log the msg in cmd
});
