const express = require("express");
const mysql = require("mysql2");
const app = express();
const portno = 3000;
const curpath = __dirname;

console.log(curpath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdacacts',
    database: 'express_dbt_2025'
})
 

db.connect((err) => {
    if(err){
        console.log("Database is not connected "+err)
        return;
    }
    else{
        console.log("Database is connected")
    }
})

const getall = "select * from emp";
const getbyid = "select * from emp where empcode = ?"
const insertdata= "insert into dept (deptcode, deptname, budget) values (?,?,?)"
const updatedept = "update dept set deptname = ? where deptcode = ?"
const deletecontent = "delete from dept where deptcode = ?"

app.get('/api/contact', (req, res) => {
    db.query(getall, (err, results) => {
        if(err){
            console.error('Error: '+res)
            res.status(500).json({error: "Internal Server Error"})
            return
        }
        res.json(results);
    })
})
//http://localhost:3000/api/contact/
app.get('/api/contact/:id', (req, res) => {
    const empcode = req.params.id;
    db.query(getbyid, empcode, (error, results) => {
        if(error){
            console.error('Error: '+error)
            res.status(500).json({error: "Internal Server Error"})
            return;
        }
        res.json(results)
    })
})

app.post('/api/contact', (req, res) => {
    const { deptcode, deptname, budget} = req.body;
    console.log(req.body);
    db.query(insertdata, [deptcode, deptname, budget],(error, results) => {
        if(error){
            console.error('Error: '+error)
            res.status(500).json({ error: "Internal Server Error"})
            return;
        }
        res.status(201).json({message: "Contact Created", contactid: results.deptname})
    })
})


app.delete('/api/contact/delete/:id', (req, res) => {
    const givenid = req.params.id
    db.query(deletecontent, givenid, (error, results) => {
        if(error){
            console.error("Error: "+error)
            res.status(500).json({error: "Internal Server Error"})
            return
        }
        //res.json(results)
        res.json({message:"Internal Server Error"})
    })
})



app.get('/', (req, res) => {
    res.sendFile(__dirname+'/restapi.html')
})

app.listen(portno, () => {
    console.log(`Server is listening at the port ${portno}`);
});
