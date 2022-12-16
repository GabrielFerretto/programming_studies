/*
Esta pilha de funções funciona como uma espécie de "GPS" para
o compilador. A cada chamada é
armazenado na call stack a posição da função atual, para que
ao terminar a execução o compilador possa
continuar executando de onde parou

*/

function ola(quem) {
    console.log("Olá " + quem);
}

ola("Fulano");
console.log("Tchau");