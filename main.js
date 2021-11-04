
var nomeCriador="Paulo Vitor";
var idadeCriador=23;
var frase="Alemanha é topz";




//arrays
var numeros=[1,2,3];
var frutas=["maçã","uva","mamão"];


//alert("Sabemos que você possui: "+idadeCriador+" anos de idade");




console.log(idadeCriador);
console.log(nomeCriador);

//imprimindo resultado arrays
console.log(numeros[0]);
console.log(numeros);
console.log(numeros.toString());
console.log(numeros.join("|"));
console.log(frutas.join("-"));
console.log(frutas.toString());
console.log(frutas[2]);
console.log(frutas.push("abacaxi"));
console.log(frutas);
console.log(frutas.pop());


//sobre o replace dunciona também no Alert substituir palavra da string por outra palavra , não a string toda a palavra
console.log(frase.replace("Alemanha","Brasil"));

//condicionais


/*
//variavel da condicional maior menor de idade

var condIdade=prompt("Qual a sua Idade ?");

if(condIdade>=18){

alert("Pode ser preso !!!");

}else{

alert("Funase");

};

*/



//estrutura de repetição 


/*

var contador=0;

while(contador<=5){
console.log(contador);
contador=contador+1;
}

var countFor;
for(countFor = 0;countFor < 5; countFor++){
console.log(countFor);
};



//classe js que mexe com datas

var d = new Date();

console.log(d);
console.log(d.getMonth()+1);
console.log(d.getDay());
console.log(d.getYear()-100+2000);

var lista = [“Alemanha”, “Inglaterra”, “Escócia”];
lista.push(“Polônia”);
lista.pop(“Inglaterra”);

*/

/*
function validaIdade(vIdade=prompt("Digite sua idade")){

if(vIdade >= 18){

alert("Você já pode ser preso");

}else{
alert("você vai é pra funase");
};

};


*/

var name="Kamilla";
var inputNome = prompt("Qual seu nome ?");

if(name==inputNome){

alert("Você é meu amor !!!");

}else{

	alert("Não é o BB !!!");
};









