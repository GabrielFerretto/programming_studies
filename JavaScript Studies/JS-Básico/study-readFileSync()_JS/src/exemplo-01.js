var readlineSync = require('readline-sync') // chamando a biblioteca

// usando o metodo -> questionfloat() para passar um número decimal(float)
var a = readlineSync.questionFloat("Digit a primeira nota: ");
console.log(`O primeira nota digitada é: ${b}`)

var b = readlineSync.questionFloat("Digit o sugunda nota: ");
console.log(`A segunda nota digitada é: ${b}`)

var calc = (a + b) / 2 // calculando o valor

/*
 adcionando o valor a outra variavel e passando o metodo -> toFixed()
 para dizer que queremos que mostre um determinado número de casas decimais
*/
var media = calc.toFixed(5) // 5 -> casas decimais

console.log(`MEDIA: ${media}`)

 