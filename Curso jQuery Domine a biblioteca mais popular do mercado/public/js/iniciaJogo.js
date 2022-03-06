
const tempoInicial = $("#tempoDigitacao").text();
let spanCaractersQtd = $("#contadorLetras");
let tamanhoFrase = $("#tamanho-frase");
let spanPalavrasQtd = $("#contadorPalavras");
let campoDeTexto = $(".campoDigitacao");
let frase = $(".frase").text();

$(
    function () {
        atualizaTamanhoFrase();
        inicializaContadores();
        inicializaTempo();
        $("#reiniciar-jogo").click(reiniciarJogo);
        inicializaMarcadores();
    }

);

function atualizaTamanhoFrase() {

    let numPalavras = frase.split(" ").length;
    tamanhoFrase.text(numPalavras);
};



function inicializaContadores() {

    campoDeTexto.on("input", function () {

        let conteudo = campoDeTexto.val();
        spanCaractersQtd.text(conteudo.length);


        spanPalavrasQtd.text(campoDeTexto.val().split(" ").length);
    })
};


function inicializaTempo() {
    let tempoDigitacao = $("#tempoDigitacao").text();
    campoDeTexto.one("focus", function () {
        let cronometroTemId = setInterval(function () {

            tempoDigitacao--;
            $("#tempoDigitacao").text(tempoDigitacao);

            if (tempoDigitacao < 1) {
                clearInterval(cronometroTemId);
                finaliza();
                inserePlacar();
            }
        }, 1000);


    })

};






// let botaoReiniciar = $("#reiniciar-jogo").on("click", function(event){
//     event.preventDefault();
//     console.log("teste reiniciar");

// })

