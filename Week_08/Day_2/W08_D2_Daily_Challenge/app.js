const express = require ('express');
const router = require ('./routes/usersRouter.js');

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

app.use('/', router);