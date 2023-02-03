function converterDuracao() {
// Pegar as referencia da pagina HTML
var inTitulo = document.getElementById("inTitulo");
var inDuracao = document.getElementById("inDuacao");
var outTitulo = document.getElementById("outTitulo");
var outResposta = document.getElementById("outResposta")

//Obter os campos de entrada
var titulo = inTitulo.value;
var duracao = Number(inDuracao.value);

// Fazendo a conta de duração, minutos para horas obtendo valor inteiro e arredondando para baixo
var horas = Math.floor(duracao / 60);
// obtendo o resto do valor acima colocando em minutos
var minutos = duracao % 60;
// altera o conteúdo dos parágrafos de resposta
outTitulo.textContent = "O nome do filme: " + titulo;
outResposta.textContent = "O filme tem: " + horas + " hora(s) e " + minutos + "minuto(s)";
}
// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);