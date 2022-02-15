import { ContaCorrente } from "./Conta/ContaCorrente.js";
import {Cliente} from "./Cliente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";

 

/*Para importar dessa forma é necessario o nome da classe
e o endereço do arquivo boa pratica inserir o endereço absoluto 
o arquivo da classe deve iniciar com letra maiuscula além disso deve conter
a palavra reservada (export) antes da palavra classe, ao ser executado o programa vai 
acusar erro de modulo e sentir falta do arquivo packege.json e vai dar erro 

vai ser necessario acessar o terminal ( ctrl j ) e dar o comando (npm init)
nomear o modulo descrever e seguir dando enter até criar o package.json 

no arquivo package.json vai ser necessario adicionar ao final do codigo o seguinte codigo:

,
  "type": "module"


obs não esquecer da virgula e vai dar certo, é importante que todas as classes tenham o export 
todas as classes que estão sendo importadas no arquivo index. 

*/

//criação de cliente
 const clientePaulo = new Cliente("Paulo Vitor","09675694432","8581386");






//Criação de duas contas correntes
// const contaCorrentePaulo = new ContaCorrente(clientePaulo, 1608);

// const contaPauloPoup = new ContaPoupanca(clientePaulo,1716);


//teste se ele deposita valor negativo 
//contaCorrentePaulo.depositar(-500);


// contaCorrentePaulo.depositar(1000);
// contaCorrentePaulo.sacar(500);

// contaPauloPoup.depositar(1000);
// contaPauloPoup.sacar(500);


// console.log(contaCorrentePaulo);
// console.log(contaPauloPoup);


// const contaSa = new ContaSalario(clientePaulo,500);
// contaSa.depositar(1000);
// contaSa.sacar(500);
// console.log(contaSa);



// const conta = new Conta(clientePaulo,5001);
// console.log(conta);




const diretor = new Diretor("marcos",5000,123456963);
const gerente = new Gerente("kleber",2500,369456852);

console.log(diretor);
diretor.cadastrarSenha("123456");
console.log(gerente);

const estaLogado = SistemaDeAutenticacao.login(clientePaulo,"123456")

console.log(clientePaulo.senha);










