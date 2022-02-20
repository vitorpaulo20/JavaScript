var campoDeFiltro = document.querySelector("#filtrar-pacientes");
//o evento input chama a função toda vez que o usuario digitar algo
campoDeFiltro.addEventListener("input", function () {

    //o this.value o this esta referenciando o cara que chamou o evento nesse caso o campoDeFiltro     
    console.log(this.value);


    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

//expressão relugar classe RegExp recebe o que ele vai procurar e uma string nesse caso o 
// "i" minusculo significa letras mausculas ou minuscular de this.value 
            var expressao = new RegExp(this.value,"i");

            if (!expressao.test(nome)) {
//se o que foi digitado for igual a nome todos os pacientes no html recebem a classe css tornarInvisivel
                paciente.classList.add("tornarInvisivel");
            } else {
                paciente.classList.remove("tornarInvisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("tornarInvisivel");
        }

    }


})
