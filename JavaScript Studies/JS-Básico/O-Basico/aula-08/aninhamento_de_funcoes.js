var paisagem = function() {
    var res = "";
    var vale = function(quant) {
        for (var c = 0; c < quant; c++) {
            res += "_";
        }
    };
    var montanha = function(quant) {
        res += "/";

        for (var c = 0; c < quant; c++) {
            res += "'";
        }

        res += "\\";
    };

    /*
    As funções vale e montanha podem acessar a variável res porque elas estão dentro do mesmo escopo da
    função paisagem. Entretanto elas não podem enxergar as variáveis c e res uma da outra (somente dela
    mesmo), porque elas estão definidas em escopos diferentes.

    */

    vale(3);
    montanha(4);
    vale(6);
    montanha(1);
    vale(1);

    return res
}

/*
    E o programa principal (ambiente externo) não consegue enxergar a variável res, vale e montanha porque
    estão sob o escopo da função paisagem.
*/

console.log(paisagem())