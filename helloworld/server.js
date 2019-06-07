require('dotenv').config();
const express = require('express');
const massive = require('massive')
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const handler = require('./controller')


const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        console.log('db is connected');
        app.set('db', dbInstance);
    })
    .catch((err) => {
        console.log(`The Code is Dark and Full of Errors: ${err}`)
    })

app.post('/auth/login', handler.login);
app.post('/auth/register', handler.register);

app.get('/posts/:userPosts/:searchin', handler.allPosts);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})