const idadeComprador = 18;
const estaAcompanhada = false;
const destino = "salvador";

let destinoExiste = false;
let temPassagemComprada = false;

listaDeDestinos = new Array(
    `salvador`,
    `são paulo`,
    `rio de janeiro`
);



console.log("Endereços disponiveis: \n ");
console.log(listaDeDestinos);


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("\n\nBoa Viagem!!!\n");
    listaDeDestinos.splice(2, 1);
    console.log(listaDeDestinos);
    temPassagemComprada = true;
} else {
    console.log("\n\nNão é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

let contador = 0;

while (contador < 2) {
    if (listaDeDestinos[contador] == destino) {
        console.log("\nDestino Existe !!!");
        destinoExiste = true;
        break;
    } else {
        console.log("\nDestino Não Existe !!!");
        destinoExiste = false;
    }

    contador += 1;
};

console.log("Destino existe: ",destinoExiste);
