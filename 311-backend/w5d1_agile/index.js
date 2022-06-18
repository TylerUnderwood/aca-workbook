const express = require('express');
const app = express();
const employeesRouter = require('./routes/employees');

const port = process.env.PORT || 4001;

app.use(employeesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
});

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`)
});