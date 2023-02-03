// Elaborar um programa para uma revenda de veículos. O programa deve
// ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x
function conversion() {
  // Declarar itens do HTML
  var inModelo = document.getElementById("inModelo");
  var inValor = document.getElementById("inValor");
  var outModelo = document.getElementById("outModelo");
  var outEntrada = document.getElementById("outEntrada");
  var outParcela = document.getElementById("outParcela");


  // Obter os conteúdos do campo de entrada
  var modelo = inModelo.value;
  var valor = Number(inValor.value);

  // Calculo valor de entrada
  var entrada = (valor * 0.5);
  // Calcular o restante dividido em 12x
  var resto = (entrada / 12);

  // altera o conteúdo dos parágrafos de resposta
  outModelo.textContent = "Promoção: " + modelo
  outEntrada.textContent ="A entrada será de: " + entrada + "$ mil reais";
  outParcela.textContent = "Com 12 parcelas de: " + resto.toFixed(2) + "$ mil reais";
} 
  // cria uma referência ao elemento btConverter(botão)
  var btConvert = document.getElementById("btConvert");
  // registrar um evento associado ao botão, para carregar uma função
  btConvert.addEventListener("click", conversion);