const express = require('express')//for webhosting. 
const mysql = require("mysql2")//for UR db access
const cors = require("cors");//for handling cors

const app = express();
const portNo = 1234;
//////////////////Handle body parsers for post operations////////
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());//Resolve CORS Errors. 
/////////////////////////MySQL Connection Code//////////////////
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'982223',
    database: 'e2eappdb'
});


db.connect((err)=>{
    err == null ? console.log("connected") : console.error(err.message);
})
/////////////////////SQL COMMANDS//////////////////////////////
const getAll = "select * from customer";
const getById = "select * from customer where id = ?"
const insert = "insert into customer(fullName, phoneNo, emailAddress) values(? ,? ,?);"
const update = "update customer set fullName = ?, phoneNo =? emailAddress = ? where id = ?";
const delRec = "delete from customer where id  = ?"
//////////////////////////////End Points////////////////////////////
app.get("/customers", (req, res)=>{
    db.query(getAll, (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json(results)
    })
})

app.get("/customers/:id", (req, res)=>{
    const { id } = req.params; //get the Id from the query string... 
    db.query(getById, id, (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json(results)
    })
})


app.post("/customers", (req, res)=>{
    const {fullName, phoneNo, emailAddress } = req.body;
    db.query(insert, [fullName, phoneNo, emailAddress], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json({id : results.insertId, fullName, phoneNo, emailAddress});
    })
})

app.put("/customers/:id", (req, res)=>{
    const{ id  } = req.params;
    const {fullName, phoneNo, emailAddress } = req.body;
    db.query(update, [fullName, phoneNo, emailAddress, id], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        else res.json({"message" : "customer updated successfully"});
    })
})

app.delete("/customers/:id", (req, res)=>{
    const{ id  } = req.params;
    db.query(delRec, [id], (err, results)=>{
        if(err) return res.status(500).json({error : err.message});
        res.json({"message" : "Customer deleted successfully"});
    })
});
///////////////////////Start UR server/////////////////////////////////////////
app.listen(portNo, ()=>{
    console.log(`server is running at port ${portNo}`)
})

