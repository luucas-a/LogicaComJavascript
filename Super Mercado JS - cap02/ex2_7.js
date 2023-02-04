function conversion() {
 // Declarar vaiareis do HTML
  var inProduto = document.getElementById("inProduto");
  var inValor = document.getElementById("inValor");
  var outDesconto = document.getElementById("outDesconto");
  var outValor = document.getElementById("outValor");

  // Pegar informações HTML
  var produto = inProduto.value;
  var valor = Number(inValor.value);

  // Calculo desconto
  var desconto = valor / 2;
  var pagar = (valor*2) + desconto;

  // transformando e colocando no texto
    outValor.textContent = produto + " - Promoção Leve 3 por R$: " + pagar
    outDesconto.textContent = "O 3º produto sai por apenas R$: " + desconto;

}
// Declarar variáveis do HTML button
var btDesconto = document.getElementById("btDesconto");
// Vincular o button com saída
btDesconto.addEventListener("click", conversion)
