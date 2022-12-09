//ligar();

var temperatura = 100

while(temperatura < 180) {
    console.log(`Temperatura atual:  ${temperatura}`);
    temperatura = ler_temperatura(); // a leitura da temperatura faz o papel do contador
    minutos = ler_tempo(); // a leitura do tempo faz o papel de saída forçada

    if(minutos >= 60) {
        console.log("O forno pode estar com problemas...");
        break; // <<<- aqui executa a parada forçada do while
    }

}

desligar();