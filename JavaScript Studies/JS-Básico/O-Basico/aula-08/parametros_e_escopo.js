var x = "variável global";

var f1 = function() {
    x = "variável da função 1" // altera a variável global a primeira vez
}
f1();

var f2 = function() {
    x = "variável da função 2" // altera a variável global a primeira vez
}
f2();

console.log(x) //-> variavel da função 2