var teste, mob;

function botao_teste()
{
  teste = document.getElementById("pppppp").firstChild;
  console.log(teste.nodeValue);
  mob = parseInt(teste.nodeValue) +1;
  document.getElementById("pppppp").innerHTML = "TESTANDO";
}
teste = document.getElementById("pppppp").firstChild.nodeValue;


export {teste};