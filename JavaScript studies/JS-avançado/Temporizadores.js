// Duas formas de serem feitas

// setInterval -> executa de tempos em tempos
function acao(){
    console.log("Foi...");
}

setInterval(acao, 1000);

//Usando função anonima
setInterval(() => {
    console.log("Foi..");
}, 1000);


// setTimeout -> executa apenas uma vez
setTimeout(() => {
    console.log("Executou o Timeout");
}, 3000);

