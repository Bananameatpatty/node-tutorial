const http = require('http');

// first we create a server and then we use it 

const server = http.createServer((req, res) => {
  console.log(req)
  res.end('hello from the server! ');
  // to send back a response when we get a request
})

server.listen(8080 ,  () =>{
  console.log('listening to request on port 8000')
}) //listening for the incoming requests
//this segment will only end when we get some request
// basically waiting for some requests

