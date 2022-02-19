
//Alteração do titulo

var titulo = document.querySelector(".tituloPagina");
    
titulo.textContent = "Paulo Nutricionista";




for (var i = 0; i < 5; i++) {

    
    // Seleciona todos os atributos do html(tags) com a classe paciente e 
    //atribui a uma variavel
    var paciente = document.querySelectorAll(".paciente");
    var pacientes = paciente[i];
    
    


    //Recebe altura da tabela e atribui a uma variavel semente o conteudo texto
    var tdAltura = pacientes.querySelector(".info-altura");
    var altura = tdAltura.textContent;



    //var tdPesoImc = pacientes.querySelector(".info-imc");
    //Recebe peso da tabela e atribui a uma variavel semente o conteudo texto
    var tdPeso = pacientes.querySelector(".info-peso");


 
 

    if (tdPeso.textContent >= 400 || tdPeso.textContent <= 0) {
        //se o peso form invalido ele vai adicionar a classe css ao html captado pela variavel pacientes
        //que muda a cor da linha
        pacientes.classList.add("paciente-invalido");   
    } else {
        var peso = tdPeso.textContent;
    }

    const imc = calculaImc(peso,altura);
     tdImc = pacientes.querySelector(".info-imc");
    tdImc.textContent = imc;

}


function calculaImc(peso,altura){


    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}