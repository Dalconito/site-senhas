const porta = 31000;
var app = require('./config/server');

var home = require('./app/routes/home')(app);
var mostrar = require('./app/routes/mostrar')(app);
var login = require('./app/routes/login')(app);
var cadastro = require('./app/routes/cadastro')(app);
var edit = require('./app/routes/edit')(app);

app.listen(porta, function(res, req)
{
    console.log("Servidor ON, Porta: " + porta);
});