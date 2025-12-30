const mysql = require("mysql2")
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'cdacacts',
    database: 'nodejsdemo'
});
db.connect((err)=>{
    err == null ? console.log("connected") : console.error(err.message);
})


function getAllRecords(){
    db.query("select * from customer", (err, results)=>{
            if(err) console.error(err.message);
            else {
                results.forEach((val)=>{
                    console.log(`${val.fullName} from ${val.phoneNo}`)
                })
            }
    })
}
getAllRecords();
