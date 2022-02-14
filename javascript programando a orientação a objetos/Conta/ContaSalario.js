
import { Conta } from "./Conta.js"

export class ContaSalario extends Conta{

constructor(cliente,agencia){
super(cliente,agencia);
};


sacar(valor){
const taxa = 1.01;
let valorTaxado = valor * taxa;
this._sacar(valorTaxado);
return this._sacar;
};


};