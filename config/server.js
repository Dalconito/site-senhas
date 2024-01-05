var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public/'));
app.use(express.static('./app/routes/'));

module.exports = app;
