const express = require('express');

const cors = require('cors');

// piece of express middleware that reads a form’s input, stores it as a javascript object accessible through req.body
const bodyParser = require('body-parser');

// to log application routes
const morgan = require('morgan'); 

// creating nodejs server called as app
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

export default app;

