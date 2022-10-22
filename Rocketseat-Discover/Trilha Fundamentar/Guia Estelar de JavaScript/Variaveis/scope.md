# Scope

**Escopo determina a visibilidade de algumas variáveis no JS**

# Block statement

```js
    // vmos iniciar um bloco
    {
        // aqui dentro é um bloco e posso colocar qualquer código
    } //aqui fechamos o bloco

```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`


## var 
```js
    // var é global e poderá funcionar fora de um escopo de bloco
    console.log("> existe x antes do bloco ?", x) // hoisting

    {
        var x = 0
    }

    console.log("> existe x depois do bloco ?", x)
```

## let e const 
```js
    // const e let são locais e só funciona, no escopo onde foi criada
    console.log("> existe y antes do bloco ?", y)

    {
        let y = 0
    }

    console.log("> existe x depois do bloco", y)
```