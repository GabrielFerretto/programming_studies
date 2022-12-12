var f1 = function() {
    console.log("Executando f1");
}

var f2 = function(f) {
    console.log("Executando f2")
    f();
}

// Executando -> f2
// Executando -> f1
f2(f1)
