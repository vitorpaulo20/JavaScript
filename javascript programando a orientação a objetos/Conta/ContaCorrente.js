import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContasCorrente = 0;
    constructor(cliente, agencia){
        super(cliente, agencia);
        ContaCorrente.numeroDeContasCorrente ++;
    };


    sacar(valor) {
        if (this._saldo >= valor) {
            let valorAjustado = 0;
            valorAjustado = valor * 1.1;
            this._saldo -= valorAjustado;
            // console.log(`\nSeu saldo depois de sacar é de: ${this.#saldo}`);
            return valor;

        };
    };
    
};