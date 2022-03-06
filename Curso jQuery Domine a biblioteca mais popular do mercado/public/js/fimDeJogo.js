function finaliza() {
    //attr é como se fosse o classList().add() porem com mais funcionalidades
    //ele é capaz de tirar e inserir atributos a sua tag por exemplo uma classe um id 
    // em casos de atributos sem parametros feito esse disabled temos de passar ele 
    //como string com aspas virgula true ou false .. true insere e false remove o atributo
    // e caso passe apenas um parametro string ele imprimi o conteudo desse parametro se ele 
    //existir na tag.
    campoDeTexto.attr("disabled", true);
    // três formas de ajustar css no js
    // campoDeTexto.addClass("jogoAcabou");
    // campoDeTexto.attr("class","jogoAcabou");
    campoDeTexto.toggleClass("jogoAcabou");
    // campoDeTexto.css("background-color","lightgray");

};



function reiniciarJogo() {

    campoDeTexto.attr("disabled", false);
    spanCaractersQtd.text("0");
    spanPalavrasQtd.text("0");
    campoDeTexto.val("");
    $("#tempoDigitacao").text(tempoInicial);
    //forma de remover class da tag com jquery 
    campoDeTexto.removeClass("jogoAcabou");
    campoDeTexto.removeClass("borda-vermelha");
    campoDeTexto.removeClass("borda-verde");
    // se tiver ele tira se não tiver ele inseri a classe na tag toggleClass
    // campoDeTexto.toggleClass("jogoAcabou");
    inicializaTempo();

};

function inicializaMarcadores() {

    let fraseTeste = $(".frase").text();
    campoDeTexto.on("input", function () {
        var digitado = campoDeTexto.val();
        var comparavel = fraseTeste.substr(0, digitado.length);

        if (digitado == comparavel) {
            campoDeTexto.addClass("borda-verde");
            campoDeTexto.removeClass("borda-vermelha");
        } else {
            campoDeTexto.addClass("borda-vermelha");
            campoDeTexto.removeClass("borda-verde");
        }
    });
};