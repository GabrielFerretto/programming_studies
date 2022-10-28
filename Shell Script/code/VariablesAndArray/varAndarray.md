# Variáveis de ambinte

Para saber quais são as variáveis de sitema:
```sh
    printenv

    env
```
## Variaveis em Shell

* O comando **set** é usando para mostrar/modoficar variaáveias de ambiente:
```sh
    set | grep OS
```
<hr>

* O comando **export** exporta uma variável para as variaveis de ambiente.
```sh
    HELLO="Hello Word!"
    echo $HELLO

    export HELLO
    set | grep HELLO
```
<hr>

* Dica: **set -o** (mostra  off e on) e **noclubber** (> para não sobrepôr).
<hr>

## [Variáveis Especiais](https://aurelio.net/shell/canivete/#variaveis)

São variáveis composta de números e caracteres que passam parãmetros para funções/scripts e exibem status do script.
