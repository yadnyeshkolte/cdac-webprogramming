
const http = require("http");
const fs = require("fs");
const path = require("path");

const portno = 1234;


http.createServer((request, response) => {
    processRequest(request, response);
}).listen(portno);


function processRequest(req, res) {
    console.log("Request url is: "+req.url)
    filePath = "";
    switch(req.url){
        case "/home":
            filePath = "./home.html";
            break;
        case "/aboutme":
            filePath = "./aboutme.html";
            break;
        case "/contact":
            filePath = "./contact.html";
            break;
        case "/ppolicy":
            filePath = "./ppolicy.html";
            break;
        default:
            filePath = "./default.html";
    }
    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500, {"content-type": "text/html"})
            res.end("<h2>Internal server error</h2>");
        }
        else{
            res.writeHead(200, {"content-type": "text/html"})
            res.end(data);
        }
    })
}




/*
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
            filePath = "./home.html";
            break;
        case '/aboutme':
            filePath = "./aboutme.html";
            break;
        case '/contact':
            filePath = "./contact.html";
            break;
        case '/ppolicy':
            filePath = "./ppolicy.html";
            break;
        default:
            filePath = "./default.html";
    }

    fs.readFile(filePath, (err, data) => {
        if(err){
            res.writeHead(500, {"Content-Type": "text/html"});
            res.end("<h1>This is Server Error<h1/>");
        }
        else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    })

}
*/
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
