const express = require('express')
const mysql = require("mysql2")
const cors = require("cors");

const app = express();
const portNo = 1234;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'982223',
    database: 'e2eappdb'
});


db.connect((err)=>{
    err == null ? console.log("connected") : console.error(err.message);
})

const getAll = "select * from books;"
const getById = "select * from books where id = ?;"
const insert = "insert into books(title, author, pub_year, genere, status) values(? ,? ,?, ?, ?);"
const update = "update books set title = ?, author = ?, pub_year = ?, genere = ?, status = ? where id = ?;"
const delRec = "delete from books where id  = ?;"

app.get("/books", (req, res)=>{
    db.query(getAll, (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json(results)
    })
})

app.get("/books/:id", (req, res)=>{
    const { id } = req.params; 
    db.query(getById, id, (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json(results)
    })
})


app.post("/books", (req, res)=>{
    const {title, author, pub_year, genere, status } = req.body;
    db.query(insert, [title, author, pub_year, genere, status], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json({id : results.insertId, title, author, pub_year, genere, status});
    })
})

app.put("/books/:id", (req, res)=>{
    const{ id  } = req.params;
    const {title, author, pub_year, genere, status } = req.body;
    db.query(update, [title, author, pub_year, genere, status, id], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json({"message" : "Book updated successfully"});
    })
})

app.delete("/books/:id", (req, res)=>{
    const{ id  } = req.params;
    db.query(delRec, [id], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        res.json({"message" : "Book is deleted successfully"});
    })
});

app.listen(portNo, ()=>{
    console.log(`server is running at port ${portNo}`)
})

