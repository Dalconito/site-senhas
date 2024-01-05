module.exports = function(app){
  const fs = require('fs');
  var url =require('url');
  var data = require('./../miscelanea/formatodata.js');

  app.get('/inicial', function(req, res)
  {
   
    var existente;
    var conteudo = fs.readFileSync('data.json', function(err, data) {console.error(err);});
    var q = url.parse(req.url, true);
      
    var conteudo_tratado = JSON.parse(conteudo);
    var array_conteudo = [0]; array_conteudo[0] = conteudo_tratado;
    array_conteudo.push(q.query);
    var array_flat = []; array_flat = array_conteudo.flat();
    var dados_tratados = JSON.stringify(array_flat, null, 4);
    dados_parse = JSON.parse(dados_tratados);
    var leitura = []; leitura = dados_parse;
    var existe;

    if (q.query.data_login == undefined || q.query.data_login == undefined)
    {
      console.log(data + " " + "Nenhum dado recebido");
    }
    else
    {
      if(q.query.data_login == "" || q.query.data_site == "")
      {
        console.log(data + " " + "Nenhum dado recebido");
      }
      else
      {
        fs.writeFile("data.json", dados_tratados,
        (err) =>
        {if (err) console.log(err);});

        console.log(data + 'Dados Gravados!');
        existe = "DADOS GRAVADOS";
        q.query = 0;
      }
    }
    res.render("inicial", {envio:existe});
  });
};
