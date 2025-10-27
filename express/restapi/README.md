Rest API stands for Representational State Transfer API that uses HTTP requests to GET, PUT, POST and DELETE data. GET is used to read the data, POST is used to create data, PUT is used to update data and DELETE is used to delete data. The data is transferred in JSON format. Optionally XML can also be used. 

express helps in creating REST API very easily. Here is a simple demo on creating REST API using express.

This example used MySQL database to perform CRUD operations using REST API. U should create a database called nodejsdemo and create a table called contact with columns id, name, email, phoneNo before running this example.

U must install mysql package using 'npm install mysql2' command before running this example.

```javascript
const express = require('express');
const mysql = require('mysql2'); //Include mysql package..
const app = express();
const port = 3000; //define the port number

app.use(express.json()); //middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded data
```
////////////////////////////////CODE FOR MYSQL CONNECTION///////////////////////////
```javascript
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdacacts', //replace with your MySQL root password
    database: 'nodejsdemo' //database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }   

    console.log('Connected to MySQL database');
});
```
```javascript
//////////////////////////QUERIES///////////////////////////////////////////////    
const getAll = "SELECT * FROM contact";
const getById = "SELECT * FROM contact WHERE contactId = ?";
const insertContact = "INSERT INTO contact (contactName, emailAddress, phoneNo) VALUES (?, ?, ?)";
const updateContact = "UPDATE contact SET contactName = ?, emailAddress = ?, phoneNo = ? WHERE contactId = ?";
const deleteContact = "DELETE FROM contact WHERE contactId = ?";
///////////////////////////////////////////////////////////////////////////////
app.get('/api/contacts', (req, res) => {
    //Get all contacts from database
    db.query(getAll, (err, results) => {
        if (err) {
            console.error('Error fetching contacts:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

app.get('/api/contacts/:id', (req, res) => {
    //Get contact by ID from database
    const contactId = req.params.id;//Extract the id from the URL using req.params
    db.query(getById, contactId, (err, results) => {
        if (err) {
            console.error('Error fetching contact:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results[0]);//send the first record as response
    });
});

app.post('/api/contacts', (req, res) => {
    //Create a new contact
    const { contactName, emailAddress, phoneNo } = req.body; //Extract data from request body using req.body
    console.log(req.body);
    db.query(insertContact, [contactName, emailAddress, phoneNo], (err, results) => {
        if (err) {
            console.error('Error creating contact:', err);          
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(201).json({ message: 'Contact created', contactId: results.insertId });
    }
);
});

app.put('/api/contacts/:id', (req, res) => {
    //Update an existing contact
    const contactId = req.params.id;    
    const { contactName, emailAddress, phoneNo } = req.body;
    db.query(updateContact, [contactName, emailAddress, phoneNo, contactId], (err, results) => {
        if (err) {
            console.error('Error updating contact:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ message: 'Contact updated' });
    });
});

app.delete('/api/contacts/:id', (req, res) => {
    //Delete a contact
    const contactId = req.params.id;
    db.query(deleteContact, contactId, (err, results) => {
        if (err) {
            console.error('Error deleting contact:', err);  
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json({ message: 'Contact deleted' });
    });
}); 


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Ex06RestApi.html');
});


app.listen(port, () => {
    console.log(`REST API Demo app listening at http://localhost:${port}`);
});
```

HTML page Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Management</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script>
        const url = "api/contacts";
        $(document).ready(function(){
            $.get(url, function(data, status){
                console.log(data);
                $("div:first").innerHTML = data.map(contact => {
                    const contactDiv = `<div style="background-color: lightblue; margin:5px; padding:5px; width: 300px; display: inline-block;">
                        <p>${contact.contactName}</p>
                        <p>${contact.emailAddress}</p>
                        <p>${contact.phoneNo}</p>
                    </div>`;
                    $('body').append(contactDiv);
                }).join('');
            });
        }); 
    </script>
</head>
<body>
    <h1>Contact Management Software</h1>
    
</body>
</html>
```