const express = require ('express');
const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log(`server runs on 5000`);
});


app.get('/api/hello', (req, res) => {
    res.json({"message": "Hello From Express"})
});


app.post('/api/world', (req, res) => {
    res.status(201).json({"message": `I received your POST request. This is what you sent me: "${req.body.message}"`});
    console.log("Message from client:", req.body.message);
});



app.get("*", (req, res) => {
    res.send("404 this page doesn't exist");
  });