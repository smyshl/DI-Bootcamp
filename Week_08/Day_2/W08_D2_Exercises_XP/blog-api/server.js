const express = require ('express');
const router = require ('./routes/blog.router.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server runs on ${PORT}`);
});

app.use("/posts", router);
