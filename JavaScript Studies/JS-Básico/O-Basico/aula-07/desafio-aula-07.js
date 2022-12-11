var vi = Number(prompt("Digite o valor inicial"));
var vf = Number(prompt("Digite o valor final"));
var vc = Number(prompt("Digite o valor de incremento"));

var res = 0;

for (x = vi; x <= vf; x += vc) {
    res = Math.log(x);
    console.log(res)

}