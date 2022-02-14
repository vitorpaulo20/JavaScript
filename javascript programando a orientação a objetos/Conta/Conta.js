//Classe abstrata não pode ser instanciada apenas herdada , o construtor gera erro ao instanciar ela;

export class Conta {
    static qtdConta = 0;

    constructor(cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("\n\nVocê não deveria instanciar a classe Conta diretamente poís ela é uma classe abstrata");
        };
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        Conta.qtdConta += 1;


    };


    // repare que o acessor sempre é publico acessor (get ou set ) significa 
    // que não botamos o _sacar  ( _ ) junto ao nome do atributo no ato da criação
    //dos acessores .

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        };

    };

    get cliente() {
        return this._cliente;

    };

    get saldo() {
        return this._saldo;

    };

    //Early return  tecnica para verificar antes de executar o processamento 
    //Se entrar no if o return encerra a execução do metodo 

    //  depositar(valor){
    //         if(valor <= 0) return; 
    //         this._saldo +=  valor;
    //         console.log(`\n\nSeu deposito foi de: ${valor}`);
    //     };


    // Cuidado com return ele após ser executado para a execução do resto do metodo 
    // então posicione bem o return 
    // um metodo sem return ao ser atribuido a uma variavél retorna um valor undefinido

    sacar(valor) {
        throw new Error("O metodo sacar da conta é abstrato !!!");
    };

    _sacar(valor) {

        if (this._saldo >= valor) {

            this._saldo -= valor;
            // console.log(`\nSeu saldo depois de sacar é de: ${this.#saldo}`);
            return valor;

        };
    };


    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`\n\nSeu deposito foi de: ${valor}`);
        } else {
            console.log("\n\nValor não aceitavel para saque !!!\n\n");

        };
    };

    //tipos primitivos tipos de dados em metodos são copias e não refletem fora do metodo 
    //porém objetos se alterados no metodo alteram lá fora também

    transferir(valor, conta) {
        if (valor < 0) return;
        const valorSacado = this.sacar(valor);
        //repare que atributo conta é o parametro do metodo e não possui this,ou sejá,é a 
        //conta que você vai transferir o dinheiro.
        conta.depositar(valorSacado);

    };

};