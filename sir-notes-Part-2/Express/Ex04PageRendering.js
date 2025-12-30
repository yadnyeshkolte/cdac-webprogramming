//Demo on rendering static pages in express.
const express = require('express');
const app = express();
const port = 3000; //define the port number
const root = __dirname;//get the current directory path

//If no route matches, default it gives page not found error
app.get('/api/greet', (req, res)=>{
    res.send('Hello! Welcome to the Express Page Rendering Demo.');
})

app.get('/api/empList', (req, res)=>{
    res.send('Hello! Welcome to the Express Employee List Demo.');
})
app.get('/api/cstList', (req, res)=>{
    res.send('Hello! Welcome to the Express Customer List Demo.');
})
app.get('/', (req, res)=>{
    res.send('Hello! Welcome to the Express Home Page.');
})

app.listen(port, ()=>{
    console.log(`Express Page Rendering Demo app listening at http://localhost:${port}`);
});

