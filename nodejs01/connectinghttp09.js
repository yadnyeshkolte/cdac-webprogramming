const http =  require("http");

const portno = 1234;

http.createServer((request, response) => {
    console.log("Server is at: "+portno);
    processRequest(request, response);
}).listen(portno)

const fs = require("fs");
const path = require("path");

function processRequest(req, res) {
    console.log(`Request Received: ${req.url}`);
    let filePath = "";

    switch (req.url) {
        case '/home':
            filePath = "./http09/home.html";
            break;
        case '/aboutme':
            filePath = "./http09/aboutme.html";
            break;
        case '/contact':
            filePath = "./http09/contact.html";
            break;
        case '/ppolicy':
            filePath = "./http09/ppolicy.html";
            break;
        default:
            filePath = "./http09/default.html";
    }

    fs.readFile(filePath, (err, data) => {
        if(err){
            res.end("<h1>This is Server Error<h1/>");
        }
        else{
            res.end(data);
        }
    })
 /*
    fs.readFile(path.resolve(filePath), (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
    */
}

