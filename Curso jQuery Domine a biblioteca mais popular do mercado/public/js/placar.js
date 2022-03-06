function inserePlacar() {
    let corpoTabela = $(".placar").find("tbody");
    let usuario = "Paulo";

    let linha =novaLinha(usuario, spanPalavrasQtd.text());
    linha.find(".botao-remover").click(removeLinha);

    //Se quisermos adicionar a nova linha como primeiro item da tabela, devemos utilizar uma função que é prima da função .append(), que é a .prepend(). Ela adiciona a string/HTML passada como primeiro filho do elemento selecionado:

    
    corpoTabela.append(linha);
};

function novaLinha(usuario,palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Icone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}