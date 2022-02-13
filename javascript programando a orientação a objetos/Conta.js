export class Conta{
    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        
        }
        
         sacar(valor) {
        
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
                //repare que atributo conta é o parametro do metodo e não possui this,ou sejá, é a 
                //conta que você vai transferir o dinheiro.
                conta.depositar(valorSacado);
        
            }


}