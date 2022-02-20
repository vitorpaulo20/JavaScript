var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);

        var pacientes = JSON.parse(resposta);

//criar a função futuramente adicionaPacienteNaTabela         
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });


    });

    xhr.send();

});