/* 
let e const
    const e let são locais e só funcionam no escopo onde foi criada
*/
let y = 1

console.log("Existe y antes do bloco ?", y)

{
    let y = 0
}

console.log("Existe y depois do bloco ?", y)

/*
O código dara um erro pois está fora do escopo 
*/

{
    /*
        Aqui dentro também dara um erro pois devemos inicializar a variavel primero antes de 
        tentar acessar ela
    */
    console.log("Existe y aqui dentro ?", y)
    let y = 2
}

// O CORRENTO EM FAZER
{
    let y = 2
    console.log("Existe y aqui dentro ?", y)
}


/*
 PODEMOS TAMBÉM TER VARIAS VARIAVEIS COM O MESMO NOME
temos que colocar ela dentro de um escopo
 */

const x = 1

{
    const x = 2
    console.log("Nesse escopo tem x = 2 ?", x)
    {
        const x = 3
        console.log("Nesse bloco tem x = 3 ?", x)
    }
}

console.log("Tem x = 1", x )