/**Instructions
In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.
Part 1: Setting Up the Express Server
    Create a new directory named crud-api.
    Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.
    Create a new file named app.js in the crud-api directory.
    In app.js, import the express module and create an instance of an Express app.
    Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
*/

const express = require ('express');
const fetchPosts = require ('./data/dataService.js');

const app = express();

app.listen(5000, () => {
    console.log("server is running on port:5000");
});


app.get('/api/posts', (req, res) => {
    fetchPosts()
    .then(response => {
        res.status(200).json(response.data);
        console.log("Response 200 - Data successfully retrieved")})
    .catch(error => console.log("Something goes wrong", error));
    
});


app.get("*", (req, res) => {
    res.send("404 - this page doesn't exist");
  });