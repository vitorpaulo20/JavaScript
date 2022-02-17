class Nutricao {

    constructor(nome, pesoC, alturaC, paciente) {

        this.nome = nome;
        this._paciente = paciente;
        let imcCliente;

        if (pesoC < 0 || pesoC > 1000) {
            alert(`Peso: ${pesoC} invalido`);

            throw new Error("Peso inserido é invalido");
        } else {
            this._peso = pesoC;
        }

        if (alturaC < 0 || alturaC > 1000) {
            alert(`Altura: ${alturaC} invalido`);
            throw new Error("Altura inserido é invalido");
        } else {
            this._altura = alturaC;

        }

    }

    get paciente() {
        return this._paciente;
    }


    get peso() {
        return this._peso;

    }

    get altura() {
        return this.altura;
    }

    alteraTitulo(titulo) {
        titulo = document.querySelector(".tituloPagina");

        titulo.textContent = prompt("Digite o novo Titulo da Página: ");

    }



    manipulaHTML() {

        var html = document.querySelector(`#${this._paciente}`);

        var alturaPaulo = html.querySelector(".info-altura");

        alturaPaulo.textContent = this._altura;

        var pesoPaulo = html.querySelector(".info-peso");

        pesoPaulo.textContent = this._peso;

    }

    calcularImc(pacienteParam) {

        let resultadoCalculo = this._peso / (this._altura * this._altura);

        this.imcCliente = resultadoCalculo;

        //let resultadoFinal = `O seu IMC ${this.nome} é igual a: ${this.imcCliente}`;


        if (pacienteParam == null) {
            var pacienteParam = document.querySelector(`#${this._paciente}`);
        }

        pacienteParam = document.querySelector(`#${this._paciente}`);



        var imcDoHtml = pacienteParam.querySelector(".info-imc");

        imcDoHtml.textContent = resultadoCalculo;


        return resultadoCalculo;
    }

}

//console.log(pesoPaulo.textContent);

// const clientePaulo = new Nutricao("Paulo", 88, 1.77,"paciente-paulo");

// clientePaulo.manipulaHTML();

// console.log(clientePaulo.calcularImc());

//console.log(clientePaulo._paciente);

//console.log(imcTd);

//console.log(clientePaulo.imcCliente);


//Alteração do titulo

var titulo = document.querySelector(".tituloPagina");
    
titulo.textContent = "Aparecida Nutricionista";

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
        pacientes.classList.add("paciente-invalido");


   
    } else {
        var peso = tdPeso.textContent;
    }

    const imc = peso / (altura * altura);
     tdImc = pacientes.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(0);

}