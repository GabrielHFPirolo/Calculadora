function adicionar(numero){
  let num = document.getElementById("visualizador").innerHTML;
  document.getElementById("visualizador").innerHTML = num + numero
}
function apagar(){
  document.getElementById("visualizador").innerHTML = ""
}
function calcular(){
  let resultado = document.getElementById("visualizador").innerHTML
  if (resultado){
    document.getElementById("visualizador").innerHTML = eval(resultado)
  }
}