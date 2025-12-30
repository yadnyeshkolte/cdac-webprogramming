//using Express to perform registration functionality with POST method
const express = require('express');
const app = express();
const port = 3000;
//for handling post operations, we need to use body-parser middleware. This was not the part of Express earlier, but now it is included within express itself.

//
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded bodies. This is a middleware that is injected before the route handlers are called.

app.get('/Registration', (req, res) => {
    res.sendFile(__dirname + '/RegistrationPage.html');
});

app.get('/details', (req, res) => {
    const name = req.query.txtName;//getting the value of the txtName from the Querystring
    const email = req.query.txtEmail;
    res.send(`Hello ${name}! Your email address is ${email}. Registration Successful!`);
    //send method sends Text as response to the browser. 
});

app.post('/details', (req, res) => {
    console.log(req.body);  //this is available only if body-parser middleware is used.
    const name = req.body.txtName;
    const email = req.body.txtEmail;
    res.send(`Hello ${name}! Your email address is ${email}. Registration Successful using POST method!`);
});

app.listen(port, () => {
  console.log(`Registration Demo app listening at http://localhost:${port}`);
});


