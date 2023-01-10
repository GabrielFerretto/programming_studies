function pedir() {
    var valor = prompt("Digite um valor");

    switch(Number(valor)){
        case 1: 
            alert("Você escolheu 1 = Suco");
            break;
        case 2:
            alert("Você escolheu 2 = Agua Gelada");
            break;
        case 3:
            alert("Você escolheu 3 = Sorvete");
            break;
        case 4:
            alert("Você escolheu chamar o Garçom");
            break;
        default:
            alert("Escolha um opção entre 1 a 4");
            break;

    }
}