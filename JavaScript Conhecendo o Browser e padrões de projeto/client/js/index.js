var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
]


var tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();

    var tr = document.createElement("tr");



    campos.forEach(function (campo) {

        var td = document.createElement("td");


        //regex que vai servir para testar o campo do vetor a ser capturado
        var expression = new RegExp("[0-9]{4}[-|/][0-9]{2}[-|/][0-9]{2}", "g");

        //se true significa que o campo do vetor nessa passada do loop é uma data 
        if (expression.test(campo.value)) {


            // o split() separa utilizando uma regex ou um parametro para se basear na separação criando um vetor
            // o reverse() inverte a posição do vetor 
            //o join() junta um vetor transformando em string utilizando um parametro para se basear onde ele vai juntar
            var campoData = campo.value.split(/[-|/]/).reverse().join("/");
            // console.log(campoData);       testes realizados

        //atribuição do campo data a celula 
        td.textContent = campoData;
        } else {
            td.textContent = campo.value;
        }
      
        tr.appendChild(td);

    })



    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);



    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();

});

