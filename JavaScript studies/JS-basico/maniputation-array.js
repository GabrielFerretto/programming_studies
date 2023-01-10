var SenhoDosAneis = ["Bilbo Baggins", "Gandalf", "Sauron", "Isildur", "Legolas", "Beregond" ];

console.log(SenhoDosAneis);
console.log(SenhoDosAneis[3]);
console.log(SenhoDosAneis[5]);
console.log(SenhoDosAneis[1]);

// Buscando arrays
console.log(SenhoDosAneis.indexOf("Legolas")) // ele retorna a posição encontrada

// Modificando dados da lista 
console.log(SenhoDosAneis[4] = "Legolas o Elfo Guerreiro");

console.log(SenhoDosAneis);



// Adcionando item a lista
SenhoDosAneis.push("Galadriel");

console.log(SenhoDosAneis);

// Removendo items da lista
SenhoDosAneis.shift(); // remove o primeiro item
SenhoDosAneis.pop(); // remove o ultimo item

console.log(SenhoDosAneis);

// Separando items por caracteres especificos; ex: , ; - | /\ etc
SenhoDosAneis.join(;);


