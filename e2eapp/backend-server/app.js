const express = require('express')

const mysql = require('mysql2')

const cors = require("cors")

const app = express();

const portNo = 1234;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const db = mysql.createConnetion({
    host:'localhost',
    user:'root',
    password:'982223',
    databse: 'dac_dbt_2025'

})

db.connect((err) => {
    err == null ? console.log("Connecte"): console.error(err.message)
})


const getAll = "select * from emp"
const getById = "select 8 from emp where empcode=?"
const insertEmp = "insert into dept values(?,?,?)"
const update = "update dept set deptcode=?, deptname=?, budget=? where deptcode=?"
const deleteDept = "delete from dept where deptcode=?" 

app.get("/dept",(req, res) => {
    db.query(getAll, (err, results) => {
        if(err) return res.status(500).json({error: err.message});
        else res.json(results)
    })
})


app.get("/dept/:id",(req, res) => {
    const {id} = req.params;
    db.query(getById, id, (err, results) => {
        if(err) return res.status(500).json({error: err.message});
        else res.json(results)
    })
})

app.post("/dept", (req, res)=>{
    const {deptcode, deptname, budget} = req.body;

    db.query(insertEmp, [deptcode, deptname, budget], (err, results)=>{
        if(err) return res.status(500).json({error: err.message});
        else res.json({id: results.insertEmp, deptcode, deptname, budget})
    })
})

app.put("/dept/:id", (req, res) =>{
    const {id} = req.params;
    const {deptcode, deptname, budget} = req.body;

    db.query(insertEmp, [deptcode, deptname, budget], (err, results)=>{
        if(err) return res.status(500).json({error: err.message});
        else res.json({"message": "Customer data updated"})
    })
})

app.delete("/dept/:id", (req, res)=>{
    const {id} = req.params;
    db.query(deleteDept, {id}, (err, results) =>{
        if(err) return res.status(500).json({error: err.message});
        else res.json({"message": "Customer deleted Sucessfully"})
    })
})

app.listen(portNo, ()=>{
    console.log("Server is Running")
})