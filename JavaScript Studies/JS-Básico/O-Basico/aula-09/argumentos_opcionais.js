function potencia(base, expoente) {
    if (expoente == undefined) {
        expoente = 2; // define o expoente padrão
    }

    var resultado = 1;
    for (var cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }

    return resultado;
}

console.log(potencia(2));

console.log(potencia(2, 3));
