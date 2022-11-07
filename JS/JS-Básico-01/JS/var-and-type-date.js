// JS -> Tipagem dinâmica

var study = "web-dev" 

//As variaveis podem variar 

// Variando(Reatribuindo um novo valor)
study = "front-end"

// PRINCIPAIS TIPOS DE DADOS 
var nome = "Gabriel" // String
var idade = 20 // Int
var altura = 1.75 // flloat
var ativo = true // booleano
var compras = ["Melancia", "Uva", "Banana", "Morango"] // vetor (array)
var pecasCar = {
    portaD: "Direita",
    portaE: "Esquerda",
    qtdPecas: 2
} // Objeto

console.log('PROTOCLO GERADO:')

console.log(`Nome:${nome}, idade:${idade}, altura:${altura}, compras dos ultimos três dias:${compras}, peças do carro que foram trocadas:${pecasCar.portaD} e ${pecasCar.portaE}, qunatidade de peças:${pecasCar.qtdPecas} `)



