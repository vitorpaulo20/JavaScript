const numeroF = parseFloat(6.5);
// float é separado por ponto as casas decimais ...

const numeroInteiro = parseInt(10);

const paragrafo = "Isso é tudo pessoal !!! ";

const listaArray = new Array(
`Brasil`,
`Canada`,
`Belgica`
);



//Adicionar dinamicamente informações a lista de Array 
//pode ter varias aplicabilidades com form do html
listaArray.push(`Argentina`);

console.log(numeroF);
console.log(numeroInteiro);
console.log(paragrafo);
console.log(listaArray[3]);


listaArray.splice(2,1);
console.log(listaArray);