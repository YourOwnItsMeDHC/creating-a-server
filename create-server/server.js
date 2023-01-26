const http = require("http");

const port = 7980;

http.createServer((request, response) => {
    //200 means, request is successful, and we are are sending your response
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hey Bro Welcome to Deepak Chourasiya's Server</h1>");
    response.end();

}).listen(port, () => {
    console.log(`NodeJs server is started on ${port}`);
});



//It will get open on these link : http://localhost:7980