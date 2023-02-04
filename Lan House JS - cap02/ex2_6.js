function conversion() {
  // Declarar os valores do HTML
  var inValor = document.getElementById("inValor");
  var inUso = document.getElementById("inUso");
  var outPagar = document.getElementById("outPagar");

  // Receber os valores do HTML
  var valor = Number(inValor.value);
  var uso = inUso.value;

  // Calculo a ser pago
  var pagar = Math.ceil((uso / 15)) * valor;

  // alterar conteúdo dos parágrafos de resposta
  outPagar.textContent = "O valor a pagar R$: " + pagar;
}
// pegar click button html
var btValor = document.getElementById("btValor");
// registrar evento associado ao botão btValor
btValor.addEventListener("click", conversion);
