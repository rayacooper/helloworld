require('dotenv').config();
const express = require('express');
const massive = require('massive')
const cors = require('cors');
const bodyParser = require('body-parser');
const handler = require('./controller')

const app = express();
app.use(express.json());

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

// app.get('/api/all', (req, res) => {
//     const db = req.app.get('db');
//     db.GET_ALL_USERS()
//     .then((users) => {
//         console.log(users);
//         res.send(users);
//     })
// })

app.get('/auth/user', handler.login)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})