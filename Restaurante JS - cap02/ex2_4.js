// Elaborar um programa para um restaurante que leia o preço por kg e o
// consumo (em gramas) de um cliente. Exiba o valor a ser pago.

function conversion() {
  // Declarar os itens do HTML
  var inValor = document.getElementById("inValor");
  var inGramas = document.getElementById("inGramas");
  var outValor = document.getElementById("outValor");

  //Obter o conteúdo/valor do HTML
  var valor = Number(inValor.value);
  var gramas = inGramas.value;

  // Calculo a ser pago
  var conversao = valor / 1000;
  var pagar = conversao * gramas;
  // altera o conteúdo dos parágrafos de resposta
  outValor.textContent = "Valor a pagar R$: " + pagar;
}
// cria referencia ao elemento btConvert
var btCalcular = document.getElementById("btCalcular");
  // registrar um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", conversion);
