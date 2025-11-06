const express = require("express")
const mysql = require("mysql2");
const cors = require("cors")


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

const getAll = "select * from expenses;";
const getbyid = "select * from expenses where id = ?;"
const insert = "insert into expenses(amount, category, edesc, edate) values(?,?,?,?)"
const update = "update expenses set amount = ?, category = ?, edesc = ? , edate = ? where id = ?"
const deleteit = "delete from expenses where id = ?"

db.connect((err) => {
    err == null ? console.log("connected") : console.log("Error in it")
})

app.get("/expenses", (req, res) => {
    db.query(getAll, (err, results) => {
        if(err) return res.status(500).json({message: "Internal server error"})
        else res.json(results);
    })
})

app.get("/expenses/:id", (req, res) => {
    const { id } = req.params;
    db.query(getbyid, [id], (err, results) => {
        if(err) return res.status(500).json({message: "Internal server error"})
        else res.json(results)
    })

})

app.post("/expenses", (req, res) => {
    const {amount, category, edesc, edate } = req.body;
    db.query(insert, [amount, category, edesc, edate], (err, results) => {
        if (err) return res.status(500).json({error: error.message})
        else res.json({id : results.insertId, amount, category, edesc, edate})
    })
})

app.put("/expenses/:id", (req, res) => {
    const { id } = req.params;
    const { amount, category, edesc, edate } = req.body;
    db.query(update, [ amount, category, edesc, edate, id ], (error, results)=> {
        if (error) return res.status(500).json({error: error.message})
        else res.json({message: "Updated Successfully"})
    })
})

app.delete("/expenses/:id", (req, res)=>{
    const { id } = req.params;
    db.query(deleteit, [ id ], (err, results) =>{
        if (err) return res.status(500).json({message: error.message})
        else res.json({message: "Deleted Successfully"})
    })
})

app.listen(portNo, ()=> {
    console.log("Connection listening at port "+portNo)
})
