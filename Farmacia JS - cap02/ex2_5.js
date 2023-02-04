// Uma farmácia está com uma promoção – Na compra de duas unidades de um
// mesmo medicamento, o cliente recebe como desconto os centavos do
// valor total. Elaborar um programa que leia descrição e preço de um
// medicamento. Informe o valor do produto na promoção. A Figura 2.11
// apresenta a tela com um exemplo de dados de entrada e saída do
// programa.
function conversion() {
  //Obter os valores do HTML
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outText = document.getElementById("outText");

  //obter o conteudo/valor html
  var medicamento = inMedicamento.value;
  var valor = Number(inPreco.value.replace(",", "."));

  // calculo de desconto
  var desconto = Math.floor(valor.toFixed(2));

  // alterar conteúdo dos parágrafos de resposta
  outText.textContent = "Promoção de " + medicamento;
  outPromocao.textContent = "Leve 2 por apenas R$: " + desconto + " Reais";
  
}
// criar referencia ao elemento btDesconto
var btPromocao = document.getElementById("btPromocao");
  // registrar um evento associado ao botão, para carregar uma função
btPromocao.addEventListener("click", conversion);