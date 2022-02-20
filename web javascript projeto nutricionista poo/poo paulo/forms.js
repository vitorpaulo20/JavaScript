
//capta do formulario do html o botão pelo id
var botaoHt = document.querySelector("#adicionar-paciente");

//adiciona escuta no botão passando o tipo do evento que ele deve escutar e uma função que ele deve seguir quando a escutar 
botaoHt.addEventListener("click",function(event){


//reseta o evento do botão transformando em defalt para evitar o comportamento de recarregar a pagina e limpar o os campos input    
 event.preventDefault(event);


//captura tudo da tag form e adiciona a uma variavel 
var formAtr = document.querySelector("#form-adiciona");

// Estancia um objeto chamado obsPaciente que esta localizado na função objetoPacienteDoFormulario na linha 69
//recebendo como parametro o elemento html formulario declarado na linha 14
var obsPaciente = objetoPacienteDoFormulario(formAtr);

console.log(obsPaciente.nome);

//povoa a tr e suas tds com o conteudo recebido do forms input 
montaTr(obsPaciente);


//não precisamos do atributo textContent para atribuir valores de input apenas o chamamos pelo nome no input lá no html com o operador ponto -> (.) 
// var nomeJs = formAtr.nome.value;
// var pesoJs = formAtr.peso.value;
// var alturaJs= formAtr.altura.value;
// var gorduraJs= formAtr.gordura.value;



// //cria elemento dentro do html 
// var pacienteTr = document.createElement("tr");


// //cria elemento dentro do html 
// var nomeTd = document.createElement("td");
// var pesoTd = document.createElement("td");
// var alturaTd = document.createElement("td");
// var gorduraTd = document.createElement("td");
// var imcTd = document.createElement("td");


// //atribui os elementos recebidos do form para dentro da tag criada no html
// nomeTd.textContent = obsPaciente.nome;
// pesoTd.textContent = obsPaciente.peso;
// alturaTd.textContent = obsPaciente.altura;
// gorduraTd.textContent = obsPaciente.gordura;
// imcTd.textContent = calculaImc(obsPaciente.peso,obsPaciente.altura);

//console.log(imcTd.textContent);


// // serve para tornar filho de elemento do html o parametro recebido 
// pacienteTr.appendChild(nomeTd);
// pacienteTr.appendChild(pesoTd);
// pacienteTr.appendChild(alturaTd);
// pacienteTr.appendChild(gorduraTd);
// pacienteTr.appendChild(imcTd);

//console.log(pacienteTr);






function objetoPacienteDoFormulario(formAtr){

    var pacienteOb = {
nome:formAtr.nome.value,
peso:formAtr.peso.value,
altura:formAtr.altura.value,
gordura:formAtr.gordura.value,
imc:calculaImc(formAtr.peso.value,formAtr.altura.value)

    }
    return pacienteOb;

}


function montaTr(obsPaciente){
//cria elemento dentro do html 
var pacienteTr = document.createElement("tr");
pacienteTr.classList.add("paciente");


//cria elemento dentro do html 
var nomeTd = document.createElement("td");
nomeTd.classList.add("info-nome");
var pesoTd = document.createElement("td");
pesoTd.classList.add("info-peso");
var alturaTd = document.createElement("td");
alturaTd.classList.add("info-altura");
var gorduraTd = document.createElement("td");
gorduraTd.classList.add("info-gordura");
var imcTd = document.createElement("td");

//atribui os elementos recebidos do form para dentro da tag criada no html
nomeTd.textContent = obsPaciente.nome;
pesoTd.textContent = obsPaciente.peso;
alturaTd.textContent = obsPaciente.altura;
gorduraTd.textContent = obsPaciente.gordura;
imcTd.textContent = obsPaciente.imc;


// serve para tornar filho de elemento do html o parametro recebido 
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");

// inseri dentro da body mais uma linha para a tabela 
tabela.appendChild(pacienteTr);

formAtr.reset();

return pacienteTr;
}




// console.log(nomeJs);
// console.log(pesoJs);
// console.log(alturaJs);
// console.log(gorduraJs);



});




