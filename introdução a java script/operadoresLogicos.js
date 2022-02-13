const listaArray = new Array(
    `Brasil`,
    `Canada`,
    `Belgica`
);

//Adicionar dinamicamente informações a lista de Array 
//pode ter varias aplicabilidades com form do html
listaArray.push(`Argentina`);

const idade = 18;
const estaAcompanhada = true;
const passagem = true;


console.log("Destinos Possiveis: \n ");
console.log(listaArray);



//pipe (ou) ||  um ou outro 

if (idade >= 18 || estaAcompanhada == true)  {
    console.log("\nComprador Maior de Idade ou Esta Acompanhado !!! \n");
    listaArray.splice(1, 1);
    

}else {
    console.log("Menor de Idade Não Vender !!! ");
 
}


console.log("\n Embarque: \n\n");



// e comercial && (e) esse e esse 
if(idade >= 18 && passagem){
console.log("Tenha uma boa viagem !!! ");
}else{
console.log("Você não pode embarcar !!! ")
}



console.log(listaArray);