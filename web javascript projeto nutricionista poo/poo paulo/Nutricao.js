class Nutricao{

    constructor(nome, pesoC, alturaC) {

        this.nome = nome;
        this._peso = pesoC;
        this._altura = alturaC;
        let imcCliente;

    }

    get peso() {
        return this._peso;

    }

    get altura() {
        return this.altura;

    }


    calcularImc(peso, altura) {
        let resultadoCalculo = this._peso / (altura * altura);
        this.imcCliente = resultadoCalculo;
        let resultadoFinal = `O seu IMC ${this.nome} é igual a: ${this.imcCliente}`;

        return resultadoFinal;
    }

}

var titulo;
var pesoPaulo;
var alturaPaulo;

titulo = document.querySelector(".tituloPagina");

titulo.textContent = "Aparecida Nutricionista";



var paciente = document.querySelector("#paciente-paulo");

alturaPaulo = paciente.document.querySelector(".info-altura");

pesoPaulo = paciente.document.querySelector(".info-peso");

//console.log(pesoPaulo.textContent);

const clientePaulo = new Nutricao("Paulo",pesoPaulo.textContent,alturaPaulo.textContent);

console.log(clientePaulo);

console.log(clientePaulo.calcularImc(clientePaulo._peso,clientePaulo._altura));

//console.log(clientePaulo.imcCliente);