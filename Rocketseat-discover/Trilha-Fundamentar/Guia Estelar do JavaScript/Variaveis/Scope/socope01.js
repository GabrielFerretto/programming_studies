// var é global e também local

console.log("> existe x antes do bloco ?, x")  //Ira acontecer um -> hoisting(elevação)

{
    var x = 0
}

console.log("> existe x depois do bloco ?", x)