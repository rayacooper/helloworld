const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        console.log('db is connected');
        app.set('db', dbInstance);
    })
    .catch((err) => {
        console.log(`The Code is Dark and Full of Errors: ${err}`)
    })

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})