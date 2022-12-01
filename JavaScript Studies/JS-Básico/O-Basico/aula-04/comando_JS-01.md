# Primeiros comandos do JavaScript

Função: **console.log**

*Esta função basicamente exibe um valor de entrada no console do Google Chrome (ou no console onde está
em execução, caso esteja no Node.js ou no Mobile).
Muito útil quando se deseja entender, por exemplo, os valores de uma variável.*

```js
    console.log()
```
<br>

Função **alert()**

*Esta função basicamente exibe na tela do usuário uma mensagem (aquela janela chata que fica "pulando na
tela" com textos em sites "educativos").
Muito útil quando se deseja que o usuário do outro lado quebre o teclado ou então para exibir valores de
variáveis e mensagens.*

```js
    var x = 1
    alert(x)
```

*A diferença entre o **console.log()** e o **alert()** é que a primeira exibe a mensagem apenas no console do
desenvolvedor e a outra interrompe o fluxo do programa e visual saltando na tela.*
<br>

Função **prompt()** e **confirm()**

*Em determinados casos, um programa precisa saber o que passa na cabeça do usuário, qual seu nome,
idade, etc. Armazenar os valores e utilizar a posteriormente para tomar decisões ou realizar operações.
Para isso podemos contar com as funções **prompt()** e **confirm()**.*

```js
    var x = prompt("Digite seu número da sorte")
    alert(x)
```

```js
    var x = confirm("O seu número da sorte é 13?")
    alert(x)
```
