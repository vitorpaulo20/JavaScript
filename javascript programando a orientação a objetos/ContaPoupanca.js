import { Conta } from "./Conta.js";


export class ContaPoupanca extends Conta{
    static numeroDeContasPoupanca = 0;
    constructor(cliente, agencia) {
        super(cliente, agencia);
        ContaPoupanca.numeroDeContasPoupanca +=1;
    }




};