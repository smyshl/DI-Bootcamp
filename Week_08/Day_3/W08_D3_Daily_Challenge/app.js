const express = require ('express');
const router = require ('./routes/tasksRouter.js');

app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
    console.log(`Server is running on 5000`);
});

app.use('/tasks', router);