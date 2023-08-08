const express = require('express');
const cors = require('cors');
const quotes = require("./routes/quotes");

app.use('/quotes/', quotes);

const app = express();
app.use(cors());




module.exports = app;