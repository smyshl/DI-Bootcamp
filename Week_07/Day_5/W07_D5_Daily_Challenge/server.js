const express = require ('express');

app = express();

app.listen(5000, () => {
    console.log("server is running on port:5000");
});

app.use(express.json());

app.use("/", express.static(__dirname + "/public"));


app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


// app.get('/api/emoji', (req, res) => {
//     res.json(books)
// });


// app.post('/api/books', (req, res) => {
//     let new_id = Number(books.at(-1).id + 1);
//     let new_book = {
//         id: new_id,
//         title: req.body.title,
//         content: req.body.author,
//         publishedYear: req.body.publishedYear
//     };
//     books.push(new_book);
//     res.status(201).json(new_book);
//     console.log(books);
// });



app.get("*", (req, res) => {
    res.send("404 - this page doesn't exist");
  });