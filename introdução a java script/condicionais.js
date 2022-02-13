const listaArray = new Array(
    `Brasil`,
    `Canada`,
    `Belgica`
);

//Adicionar dinamicamente informações a lista de Array 
//pode ter varias aplicabilidades com form do html
listaArray.push(`Argentina`);

const idade = 17;
const estaAcompanhada = true;

console.log("Destinos Possiveis: ");
console.log(listaArray);





if (idade >= 18) {
    console.log("Comprador Maior de Idade !!!");
    listaArray.splice(1, 1);
} else if (estaAcompanhada) {
    console.log("Esta Acompanhado !!!");
    listaArray.splice(1, 1);
} else {
    console.log("Menor de Idade Não Vender !!! ");

}




console.log(listaArray);