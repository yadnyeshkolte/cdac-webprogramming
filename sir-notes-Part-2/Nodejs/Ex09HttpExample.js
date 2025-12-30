//Http is a module provided by Nodejs for performing http related operations in UR Applications. Http operations include GET, PUT, POST and DELETE. 
const http = require('http');

const portNo = 1234;//define a port no where UR Requests are handled. 

function processRequest(req, res){
    console.log(`Request recieved: ${req.url}`)
    switch(req.url){
        case '/favicon.ico': break;//Not handling this request
        case '/Employees' : res.end("<h1>Employees Management Page</h1>"); break;//sends the response.
        case '/Customers' : res.end("<h1>Customers Management Page</h1>"); break;
        case '/PayRoll' : res.end("<h1>PayRoll Management Page</h1>"); break;
        case '/Products' : res.end("<hProductses Management Page</h1>"); break;
        default: res.end("<h2>OOPS! This page is not available with Us!!!</h2>")
    }
}

http.createServer((request, response)=>{//create the server. 
    console.log("Server is available at port no " + portNo)
    processRequest(request, response)
}).listen(portNo);//Start the server
