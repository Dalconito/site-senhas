module.exports = function(app)
{
  const fs = require('fs');
  var url =require('url');
  
  
  app.get('/', function(req, res){
    var q = url.parse(req.url, true);
    
    var conteudo = fs.readFileSync('usr.json', function(err, data) {console.error(err);});
    var existente;
    var conteudo_tratado = JSON.parse(conteudo);
    var array_conteudo = [0]; array_conteudo[0] = conteudo_tratado;
    array_conteudo.push(q.query);
    var array_flat = []; array_flat = array_conteudo.flat();
    var dados_tratados = JSON.stringify(array_flat, null, 4);
    dados_parse = JSON.parse(dados_tratados);
    var leitura = []; leitura = dados_parse;
    
    for (var i=0; i<leitura.length-1;i++)
    {
      if (leitura[i].login_usr == q.query.login_usr && leitura[i].senha_usr == q.query.senha_usr)
      {console.log(i);
        existente = "true";
        break;
      }
        else
        existente = "disabled";
        console.log("antes: " + existente);
    }
      console.log(existente);
      res.render("login", {existente: existente});
    });
};