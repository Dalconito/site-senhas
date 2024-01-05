module.exports = function(app)
{
    const fs = require('fs');
    var url =require('url');
   
    app.get('/mostrar', function(req, res)
    {
        var q = url.parse(req.url, true);
        
        var conteudo = fs.readFileSync('data.json', function(err, data) {console.error(err);});

        var conteudo_tratado = JSON.parse(conteudo);
        var array_conteudo = [0]; array_conteudo[0] = conteudo_tratado;
        array_conteudo.push(q.query);
        var array_flat = []; array_flat = array_conteudo.flat();
        var dados_tratados = JSON.stringify(array_flat, null, 4);
        dados_parse = JSON.parse(dados_tratados);
        var leitura = []; leitura = dados_parse;
        
        var index_arr = [], filtro_arr = [], index_nome =[], index_cat=[];
        if(q.query.procura_titulo == undefined)
        {
            index_arr = 0;
            console.log("Nenhum Dado");
        }
        else if(q.query.data_cat == "null")
        {
            function procura (element, index)
            {
                if(element.data_site == q.query.procura_titulo)
                {
                    index_arr[index] = index;
                }
                else
                {
                    console.log("NADA ENCONTRADO");
                }
            };
            leitura.forEach(procura);
            filtro_arr = index_arr.filter(Boolean);
        }
        else if(q.query.procura_titulo == "" && q.query.data_cat != "null")
        {
            function procura (element, index)
            { 
                if(element.data_cat == q.query.data_cat)
                {
                    index_arr[index] = index;
                    console.log(index_arr);
                }
                else
                {
                    console.log("NADA ENCONTRADO");
                }
            };
            index_arr.pop();
            leitura.forEach(procura);
            filtro_arr = index_arr.filter(Boolean);
            filtro_arr.pop();
        }
        else
        {
            function procura (element, index)
            {
                if(element.data_site.toUpperCase() == q.query.procura_titulo.toUpperCase())
                {
                    index_nome[index] = index;
                }
                else
                {
                    console.log("NADA ENCONTRADO");
                }
            };
            leitura.forEach(procura);
            var filtro_nome = index_nome.filter(Boolean);

            function procura_cat (element, index)
            {
                if(element.data_cat == q.query.data_cat)
                {
                    index_cat[index] = index;
                }
                else
                {
                    console.log("NADA ENCONTRADO");
                }
            };
            leitura.forEach(procura_cat);
            var filtro_cat = index_cat.filter(Boolean);
            filtro_arr = filtro_nome.filter(element => filtro_cat.includes(element));
        }
           res.render("mostrar", {leitura:leitura, filtro_arr});
    });
};