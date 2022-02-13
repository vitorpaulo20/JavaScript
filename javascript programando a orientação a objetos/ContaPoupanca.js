

export class ContaPoupanca {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
    }

    get saldo() {

        return this._saldo;
    }

    get cliente() {

        return this._cliente;
    }

    set cliente(novoCliente) {

        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }

    }


};