// derivar o comportamento de uma função desmembrando em duas

var ola1 = function() {
    console.log("Olá tudo bem ?");
}

var ola2 = function(quem) {
    console.log("Olá tudo bem " + quem + "?");
}

ola1();

ola2("Bilbo");

// para derivar o comportamento da função ola eu precisei criar 2 funções