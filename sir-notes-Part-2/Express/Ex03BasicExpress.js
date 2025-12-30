const express = require('express');
const app = express();// create an express app, remember that express is not a IFFE. We need to call it as a function to create an app.
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World! This is my first Express App.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});