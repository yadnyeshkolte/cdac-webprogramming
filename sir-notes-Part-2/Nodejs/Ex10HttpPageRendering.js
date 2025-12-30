//This example covers rendering of files of HTML types in the server. 
//We need HTTP for Web Server Dev, FS for File handling, BODY-PARSER for processing POST handling

const http = require('http');
const fs = require('fs');
const parse = require('url').parse; //HTTP-GET Processing.
const qs = require("querystring");//For HTTP-POST


const pno = 1234; //for UR Port no
const root = __dirname//Gets the root directory of the Application. Built in variable for getting the Root directory of the Application. 

function renderPage(fileName, res){
    const file = root + fileName;//concatinate the filename with the root dir path..
    fs.createReadStream(file).pipe(res);//Reads the file, puts into a Filestream object and sends it to response using a method called pipe. pipe is the method used to process the stream to the destination(response).
}
//Function that is called for POST operation...
function handlePost(req, res){
    let inputs = '';
    //When the Form is posted, it comes with 2 events, data and end. data is for handling POST and end is to close the processing of the page. 
    req.on('data', (result)=>{ //data event will contain the  inputs Posted by the user. 
        inputs = result.toString();
        console.log(inputs);
    })

    req.on('end', ()=>{ //After the post operation is completed, we shall process the POSTED data
        console.log("Now processing the Inputs");
        const data = qs.parse(inputs);
        const msg = `<h1>Registration Successfull</h1><p>Welcome Mr.${data.txtName}</p>U will be contacted again for other details thru UR registered Email Address given as ${data.txtEmail}</p>Thank you!`
        res.end(msg);
        return;       
    })
}
function processRequest(req, res){
    if(req.url == '/favicon.ico'){
        return;
    }
    if(req.method == 'POST'){
       handlePost(req, res);
       return;
    }
    const inputs = parse(req.url, true).query;
    if(inputs.txtName  != undefined){
        const msg = `<h1>Registration Successfull</h1><p>Welcome Mr.${inputs.txtName}</p>U will be contacted again for other details thru UR registered Email Address given as ${inputs.txtEmail}</p>Thank you!`
        res.end(msg);
        return;
    }
    switch (req.url) {
        case '/Registration': renderPage('/RegistrationPage.html', res); break;
        default: renderPage("ErrorPage.html", res);
    }
}
//create the server and start it. 
http.createServer((req, res)=>{
    processRequest(req, res);
}).listen(pno);