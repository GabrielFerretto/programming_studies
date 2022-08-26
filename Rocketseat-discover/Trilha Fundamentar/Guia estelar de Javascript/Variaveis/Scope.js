// Block statement

console.log("Existe x  antes do bloco ?", x)

// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
    var x = 0 // var é global
    console.log(x)

} // aqui fechamos o bloco

console.log("Existe x depois do bloco ?", x)

/* 
O bloco, também criará um novo escopo. Chamamos de  `block-scoped` 
*/


