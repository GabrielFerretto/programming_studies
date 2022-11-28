// var nome = window.prompt("Qual é seu nome ?")  
// window.alert(`Bem-vindo ${nome.toLocaleUpperCase()}.`)


// Prompt recebe como valor de uma String

// Converter para  Number
var n1 = Number.parseInt(window.prompt("Digite um número: ")) // Utilizando o jeito antigo de conversão com o -> parseInt()
var n2 = Number(window.prompt("Digite outro número: ")) //Utilizando o jeito atual e moderno com o -> Number()

/*
    + para adição
        e
    + para concatenação
*/

var result = n1 + n2
window.alert(`A soma de ${n1} + ${n2} é igual a: ${result}`)    