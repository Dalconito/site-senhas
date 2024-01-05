const bodyParser = require('body-parser');
const fs = require('fs');

module.exports = function(app)
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}))
    app.get('/edit', function(req, res){
        res.render("edit");
    })

    let ident = 45;
    function contagem()
    {
        let id = ident + 1;
        return id;
    }

    let usuario = [];

    app.post('/edit', function(req, res){
        const user = req.body;
        usuario.push(user);
        var array_flat = []; array_flat = usuario.flat();
        var dados_tratados = JSON.stringify(array_flat, null, 4);
        fs.writeFile("edit.json", dados_tratados,
        (err) =>
        {if (err) console.log(err);});
        res.render("edit");
        console.log(user);
    })
}

