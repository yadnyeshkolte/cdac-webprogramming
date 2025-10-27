const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '982223',
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

const getall = "select * form emp";
const getbyid = "select * from emp where empcode =?"
const insert 