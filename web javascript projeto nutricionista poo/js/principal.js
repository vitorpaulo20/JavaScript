
var titulo = document.querySelector(".tituloPagina");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#paciente-paulo");

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;


var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

const imcPaulo = peso/(altura*altura);



var tdImc = paciente.querySelector(".info-imc");

tdImc.textContent = imcPaulo;









