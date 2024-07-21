const fs = require ('fs');
const express = require ('express');
const {emojies, get_random_emoji, check_emoji} = require ('./emoji.js');
let best_score = JSON.parse(fs.readFileSync('./score.json', 'utf-8'));

app = express();

app.listen(5000, () => {
    console.log("server is running on port:5000");
});

app.use(express.json());

app.use("/", express.static(__dirname + "/public"));


app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.get('/api/emoji', (req, res) => {
    res.json(get_random_emoji(emojies));
});


app.post('/api/emoji', (req, res) => {
    let _check_emoji = check_emoji(req.body.char, req.body.name);
    if (_check_emoji[0]){
        res.json({"result": true})
    } else {
        res.json({"result": false, "right_answer": _check_emoji[1]})
    };
});


app.get('/api/score', (req, res) => {
    res.json(best_score);
});


app.put('/api/score', (req, res) => {
    let _score = Number(req.body.score);
    if (_score > Number(best_score.best_score)){
      fs.writeFileSync('./score.json', `{"best_score": ${_score}}`, 'utf-8');
      res.json({"new_record": true, "best_score": _score});
    } else {
      res.json({"new_record": false});
    }
});


app.get("*", (req, res) => {
    res.send("404 - this page doesn't exist");
  });