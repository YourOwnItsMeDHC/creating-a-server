const http = require("http");
//"http" is a (package / package imports), which we have imported, allows us to do http calls
//We are storing "http" package in a variable named as "http", so whenever I require "http" package, I could
//access that using the variable

const port = 7981;        // Local port number

//createServer is a function of http package, which has tow parameters : request and response
//Below we have wrote "createServer((request, response)"
//Instead of "request, response", we could write any thing i,e. "raju, kaaju", but the oder should be same of
//request and response

http.createServer((request, response) => {
    //Callback function ==> tells whenever server creation is done, call these function
    //200 means, request is successful, and now, we(server) are are sending your response
    response.writeHead(200, {"Content-Type": "text/html"}); 
    //tells, what type of content/data is getting sent to user from server
    //text/html ==> text formatted html
    //what is 200 ==> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    //With the request, we also send some status code, eg : 200
    //Eg: if user is trying to access some page, which does not exist, so we will send 404 status code or Client
    //error responses, here the mistake is of client, bcoz he is trying wrong website which don't even exist
    //If there is an error from server side, then status code sent will be : Server error responses (500 – 599)
    //If we just want to send some information to the user as a response, then we will use status code btwn 100-199
    response.write("<h1>Hey Bro Welcome Welcome Welcome to Deepak Chourasiya's Server</h1>");
    response.end();


    //So, here I have sent request to create a server, if server is created successfully, that means, if it
    //listened, then let me know with some response ⬇⬇⬇⬇⬇
}).listen(port, () => {                          //Callback function
    console.log(`NodeJs server is started on ${port}`);  //Just a msg, to know that server is created and started
});
//Callback function - tells that, when listening on port is done, then do the part which is inside curly brackets{}



//Server Link :
//It will get open on these link : http://localhost:7981