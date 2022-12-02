# Utilizando o readlineSync() para fazer inputs

<img src="https://media.giphy.com/media/dlMIwDQAxXn1K/giphy.gif">
<hr>
<br>

**readlineSync()** *é uma otima ferramenta para que seu script tenha uma conversa com o usúario por meio de um terminal(**CLI**)*
<hr>

### Vamos a alguns exemplos:


```js
// Chamando o pacote
var readlineSync = require('readline-sync');
```

*Digamos que você queira fazer uma pergunta ao usúario então utilizamos o seguinte linha de código:*

```js
    /*Atenção que o metodo -> question() devolve a saida como um texto(string).
    Caso queira fazer calculos usamos outro metodo, ele é um pouco parecido
    */
    var seuNome = readlineSync.question('Qual é seu nome? ');
    console.log(`Olá ${seuNome} !`);
```

*Usando números:*

```js
    // Esse metodo serve para utilizar números inteiros.
    var suaIdade = readlineSync.questionInt('Digite sua idade: ');
    console.log(`Você tem ${suaIdade} anos`);
```

*Caso queira um número float:*

```js
    var suaAltura = readlineSync.questionFloat("Digite sua altura: ");
    console.log(`Sua altura é de ${suaAltura}`);
```

<br>

 [**para mais informações(clik me )**](https://github.com/anseki/readline-sync#utility_methods)



