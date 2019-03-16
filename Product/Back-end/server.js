require('dotenv').load();
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const port = process.env.DB_PORT;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: "mysecret",
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
let routes = require('./routes/routes');
routes(app);

app.use((req, res) => {
    res.status(400).send({
        url: req.originalUrl + ' not found!!!'
    })
});

//Listen
app.listen(port);
console.log("RESTful API server started on " + port);