const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
const portNo = 1234;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "982223",
    database: "e2eappdb"

})


db.connect((err) => {
    err == null ? console.log("connected") : console.log("Not connected")
})

const getAll = "select * from students";
const getbyid = "select * from students where id = ?"
const insert = "insert into students(name, dob, mobileNo, email, course_id) values(?,?,?,?,?)"
const update = "update students set name = ?, dob = ?, mobileNo = ?, email = ?, course_id = ? where id = ?"
const deleteit = "delete from students where id = ?"

app.get("/students", (req, res) => {
    db.query(getAll, (error, results) => {
        if (error) return res.status(500).json({message: error})
        else res.json(results)
    })
})

app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    db.query(getbyid, [ id ], (error, results) => {
        if (error) return res.status(500).json({message: error})
        else res.json(results)
    })
})


app.post("/students", (req, res) => {
    const { name, dob, mobileNo, email, course_id } = req.body;
    db.query(insert, [ name, dob, mobileNo, email, course_id ], (error, results) => {
        if (error) return res.status(500).json({message: error})
        else res.json({message:"Added Sucessfully"})
    })
})


app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, dob, mobileNo, email, course_id } = req.body;
    db.query(update, [ name, dob, mobileNo, email, course_id, id ], (error, results) => {
        if (error) return res.status(500).json({message: error})
        else res.json({message: "Updated Successfully"})
    })
})


app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    db.query(deleteit, [ id ], (error, results) => {
        if (error) return res.status(500).json({message: error})
        else res.json({message: "Deleted Successfully"})
    })
})

app.listen(portNo, ()=>{
    console.log("server is running at "+portNo)
})
