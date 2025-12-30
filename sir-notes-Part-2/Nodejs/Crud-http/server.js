const http = require('http');//HTTP handling
const fs = require('fs');//File reading and writing
const qs = require('querystring');//For parsing POSTED Data. 

const dataFile = __dirname + "/data.json";//Location of the json file.

//Function to Convert the json data from the file into an array of objects. 
function readData(){
    const contents = fs.readFileSync(dataFile, 'utf-8')//Read the content and get JSON data. 
    let jsonObjects =  JSON.parse(contents);//Convert the json data into objects. 
    console.log(jsonObjects)
    return jsonObjects;
}

//Write to the json file. 
function writeData(data){
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

function serveFiles(res, filePath, contentType = 'text/html'){
    fs.readFile(filePath, (err, content)=>{
        if(err){
            res.writeHead(500);
            res.end("internal Server error");
            return;
        }
        res.writeHead(200, { 'content-Type' : contentType});
        res.end(content);
    })
}
//For handling Post operations. 
function handlePost(req, res, callBack){
    let body = '';
    req.on('data', (input)=>{
        body += input
    });
    req.on('end', ()=>{
        const parsedData = qs.parse(body);
        callBack(parsedData)
        res.writeHead(302, { Location : '/'});
        res.end();
    })
}
//Creates the server and starts it at 1234.
http.createServer((req, res)=>{
    if(req.method == 'POST'){
        if(req.url == '/api/create'){
            handlePost(req, res, (data) =>{
                const json = readData();//get the current records from json file
                json.push({ "id" : parseInt(data.id), //create an object with id, name and address  
                            "name" : data.name,
                            "address" : data.address});//add the new record
                writeData(json);//write it back to file
            })
        }else if(req.url == "/api/update"){
            handlePost(req, res, data=>{
                const json = readData();
                const item = json.find(d =>  d.id === parseInt(data.id));
                if(item){
                    item.name = data.name;
                    item.address = data.address;
                    writeData(json)
                } 
            })
        }else if(req.url == "/api/delete"){
            handlePost(req, res, data=>{
                const json = readData().filter(d =>d.id != parseInt(data.id));
                writeData(json);
            })
        }else{
            res.writeHead(404);
            res.end("<h1>Not found/</h1>")
        }
    }else if(req.method == 'GET'){//For getting the web pages..
        if(req.url == '/') return serveFiles(res, './views/index.html');
        if(req.url == '/add') return serveFiles(res, './views/add.html');
        if(req.url == '/delete') return serveFiles(res, './views/delete.html');
        if(req.url == '/update') return serveFiles(res, './views/update.html');
        if(req.url == '/api/read'){
            res.writeHead(200, {'content-type' : 'application/json'});
            res.end(JSON.stringify(readData()));
        }else{
            res.writeHead(404);
            res.end("<h1>File not found</h1>")
        }
    }
}).listen(1234);