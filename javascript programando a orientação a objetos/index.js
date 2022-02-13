import { ContaCorrente } from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


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


const clientePaulo = new Cliente("Paulo Vitor","09675694432","8581386");






//Criação de duas contas correntes
const contaCorrentePaulo = new Conta(clientePaulo, 1608, 3000);

const contaPauloPoup = new Conta(clientePaulo,2000);


//teste se ele deposita valor negativo 
//contaCorrentePaulo.depositar(-500);



console.log(contaPauloPoup);















