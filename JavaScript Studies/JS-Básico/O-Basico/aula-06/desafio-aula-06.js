while(true) {
    var x = prompt("Digite o primeiro número ou N ");
    var y = prompt("Digite o segundo número ou N ");

    if (x == "N" || y == "N") {
        break
    }

    var resultado = Number(x) + Number(y);
    alert(`O resultado da soma é ${resultado}`);
}