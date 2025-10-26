const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const portno = 1234;

const datafile =  __dirname + "/data.json";
console.log(__dirname)



function readJsonFile(){
    const fileData = fs.readFileSync(datafile,"utf-8")
    let jsonData = JSON.parse(fileData);
    console.log(jsonData);
    console.log(typeof jsonData);
    return jsonData;
}

http.createServer((req, res) => {
    if(req.method == 'POST'){

    }
    else if(req.method == 'GET'){
        
    }
}).listen(portno);