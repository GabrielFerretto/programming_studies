var  pais =  "ALGUM"

var lancarMissilNuclear = function() {
    console.log("Lançando missil em 3.. 2.. 1..");
}

if(pais == "RUSSIA") {
    lancarMissilNuclear = function() {
        console.log("Usar o telefone vermelho...");
    }
}

lancarMissilNuclear();