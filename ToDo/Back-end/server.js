//Import modules
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = process.env.port || 3000;
require('dotenv').load();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Routes
let routes = require('./routes/routes');
routes(app);

app.use((req, res) => {
    res.status(400).send({
        url: req.originalUrl + ' not found!!!'
    })
});

app.listen(port);
console.log("RESTful API server started on " + port);