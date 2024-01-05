var bolha = "BOLHINHAS";
var sabao;
function botao_teste()
{
  teste = document.getElementById("peripolo").firstChild;
  console.log(teste.nodeValue);
  //mob = parseInt(teste.nodeValue) +1;
  document.getElementById("peripolo").innerHTML = bolha;
  console.log(teste.nodeValue);
  sabao = "Barabara";
  alert("Deu certo");
}

module.exports = function(app)
{
    const fs = require('fs');
    var url =require('url');
    var data = require('./../miscelanea/formatodata.js');

    app.get('/cadastro', function(req, res)
{

  var existente;
  var conteudo = fs.readFileSync('usr.json', function(err, data) {console.error(err);});
  var q = url.parse(req.url, true);
  var conteudo_tratado = JSON.parse(conteudo);
  var array_conteudo = [0]; array_conteudo[0] = conteudo_tratado;
  array_conteudo.push(q.query);
  var array_flat = []; array_flat = array_conteudo.flat();
  var dados_tratados = JSON.stringify(array_flat, null, 4);
  dados_parse = JSON.parse(dados_tratados);
  var leitura = []; leitura = dados_parse;
  var existe;
  for (var i=0; i<leitura.length-1;i++)
  {
    if (leitura[i].login_usr == q.query.login_usr)
    existente = true;
    else
    existente = false;
  }

  if (q.query.login_usr == undefined)
  {
    console.log(data + " " + "Nenhum dado recebido");
  }
  else
  {
    if(q.query.login_usr == "")
    {
      console.log(data + " " + "Nenhum dado recebido");
    }
    else if (existente)
    {
      console.log("DADOS JA EXISTENTES");

      existe = "DADOS JA EXISTENTES";
    }
    else
    {
      fs.writeFile("usr.json", dados_tratados,
      (err) =>
      {if (err) console.log(err);});

      console.log(data + 'Dados Gravados!');
      existe = "DADOS GRAVADOS";
      q.query = 0;
    }
  }

  res.render("cadastro", {envio:existe, data: data});

  });

};
