const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express();
const portNo = 1234;
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "e2eappdb",
    password: "982223"
})

db.connect((err) => {
    err == null ? console.log("connected") : console.error(err.message);
})

getall = "select * from laptop_inventory;"
getbyid = "select * from laptop_inventory where laptop_id = ?;"
insert = "insert into laptop_inventory(brand_name, model_name, serial_no, peripherals) values (?,?,?,?);"
update = "update laptop_inventory set brand_name=?, model_name=?, serial_no=?, peripherals=? where laptop_id=?"
deleteit = "delete from laptop_inventory where laptop_id=?"

app.get("/laptops", (req, res) => {
    db.query(getall, (error, results) => {
        if(error) console.log({message: error})
        else res.json(results)
    })
})

app.get("/laptops/:id", (req, res) => {
    const { id } = req.params;
    db.query(getbyid, [id], (error, results) => {
        if(error) console.log({message: error})
        else res.json(results)
    })
})

app.post("/laptops", (req, res) => {
    const { brand_name, model_name, serial_no, peripherals } = req.body
    db.query(insert, [brand_name, model_name, serial_no, peripherals], (error, results) => {
        if(error) console.log({message: error})
        else res.json({message: "added successfully"})
    })
}) 

app.put("/laptops/:id", (req, res) => {
    const { id } = req.params;
    const { brand_name, model_name, serial_no, peripherals } = req.body
    db.query(update, [brand_name, model_name, serial_no, peripherals, id], (error, results) => {
        if(error) console.log({message: error})
        else res.json({message: "Updated successfully"})
    })
})

app.delete("/laptops/:id", (req, res)=>{
    const { id } = req.params;
    db.query(deleteit, [id], (error, results) => {
        if(error) console.log({message: error})
        else res.json({message: "Delete Succesfully"})
    })
})

app.listen(portNo, () => {
    console.log("listening at the port + "+portNo)
})
