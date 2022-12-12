var x = "variável global";
var f1 = function() {
 var x = "variável da função 1";
}
f1();

var f2 = function() {
    var x = "variável da função 2";
   }
   f2();

   // Nesse caso acessamos somente a variável x declarada fora do escopo das funções

   console.log(x); // → variável global
