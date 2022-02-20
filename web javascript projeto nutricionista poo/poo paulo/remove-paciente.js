var pacientes = document.querySelectorAll(".escuta-tabela");

// foreach para cada elemendo do array pacientes execute a função sem nome 
pacientes.forEach(function(paciente){

paciente.addEventListener("dblclick",function(event){


//captura a tag clicada
var alvo = event.target;
console.log(alvo);

// captura o pai da tag clicada
//parentNode significa o nó pai 
var paiDoAlvo = alvo.parentNode;
console.log(paiDoAlvo);

//adicona a classe do css ao elemento pai 
//essa função lá no css vai diminuir a opacidade em 0,5 segundos 
paiDoAlvo.classList.add("fadeOut");


//esse comando impede uma função de ser executada por milesegundos 1000 milesegundos = 1 segundo
setTimeout(function(){

//remove o pai do elemento filho clicado
paiDoAlvo.remove();

},535)



//remove esse elemento , o elemento do array que o foreach passou
//this.remove();


})

});