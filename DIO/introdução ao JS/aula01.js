// var -> o geito "antigo" de se declarar uma variavel
var preco = 2

// O correto é usar -> let
let desconto = 0.3;
let precos = preco - desconto

// const -> seu valor não pode ser mudado
const total = precos

console.log(`O preço do produto X é de ${preco} reais, e seu desconto é de ${desconto}; o preço final a se pagar é ${total}`)