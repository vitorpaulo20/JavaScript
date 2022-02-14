import { Conta } from "./Conta.js";


export class ContaPoupanca extends Conta{
    static numeroDeContasPoupanca = 0;
    constructor(cliente, agencia) {
        super(cliente, agencia);
        ContaPoupanca.numeroDeContasPoupanca +=1;
    }

sacar(valor){
const taxa = 1.02;
let valorAjustado = valor*taxa;
super._sacar(valorAjustado);

}


};