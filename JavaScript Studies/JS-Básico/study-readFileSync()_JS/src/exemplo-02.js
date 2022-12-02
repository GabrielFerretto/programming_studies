var readlineSync = require('readline-sync')

var notaFloat1 = readlineSync.questionFloat("Digite sua nota escolar: ");
var notaFloat2 = readlineSync.questionFloat("Digite a sua segunda nota escolar: ");
var calc = (notaFloat1 + notaFloat2) / 2
var media = calc.toFixed(1);

if(media >= 5.0){
    console.log(`Show você não reprovou ${media}`)
} else{
    console.log("REPROVADO")
}

