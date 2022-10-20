# Cabeçalho 🧩

**head 💆** *é a parte não visível pelo navegador, onde se faz configurações, contém informações como o título, links para o css, para o favicon.*    

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

<br>

**meta 🏴󠁣󠁯󠁭󠁥󠁴󠁿** *normalmente virá com o atributo name para especificar a meta, content para conteúdo, mas há também como o atributo charset, para caracteres especiais.*

```html
    <!-- codificação de caracteres especiais -->
    <meta charset="UTF-8">

    <!-- portabilidade para dispositivos mobiles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<br>

**favicon 📌** *Favicon é uma abreviação para "favorite icon", refere-se aos ícones dos favoritos a alguns anos atrás, mas nos dias de hoje acabou ficando este termo, antigamente ele era por 16 pixeis, porém com o avanço da tecnologia isso mudou.
Para colocarmos o ícone usaremos a tag <link> com o atributo rel="icon", que seria para representar relação, no caso a tag link vai conter um ícone, depois o href para mostrar onde está o ícone.*

```html
    <!--
    <link> para ícones personalizados
-->

<!-- favicon básico -->
<link rel="icon" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone não-Retina, iPod Touch e dispositivos Android 2.1+: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">

<!-- iPad de primeira e segunda geração: -->
<link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPhone com tela retina de alta resolução: -->
<link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<!-- iPad de terceira geração com tela retina de alta resolução: -->
<link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>

<link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=cfca599cb367ccaf7377d56ddc7542f5"/>
```

<br>

**meta seo 🖥️** *SEO(Search Engine Optimization ou motores de busca, como o google).*

```html
    <!-- Temos também o de autor, para definir o autor da página, para possuirmos propriedade sobre a página.-->
    <meta name="author" content="Gabriel Aguiar">

    <!--Este meta é usado para descrição de sites, caso você não tenha esse meta, o navegador irá procurar qualquer texto seu, mas muito melhor escolher o que você quer que apareça.-->
    <meta name="description" content="Um website para iniciantes em programação">

    <!-- Esse meta diz para o robô do google o que queremos que ele faça, ele é responsável por colocar os resultados da busca , por exemplo. É possível dizer ao robô seguir links na página, através do follow, ou o contrário com o nofollow , ou "indexar" a página, através do index, ou no index. -->
    <meta name="robots" content="index, follow">
```

<br>

**meta social 🌐** *Existem metadados personalizados por empresas de redes sociais, como Facebook, que criou o Open Graph, que é um tipo de metadado se quisermos colocar um tipo de conteúdo especial, caso queiramos compartilhar o link da nossa página no Facebook.*

```html
     <!-- Open Graph: facebook -->
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/66374774?v=4">

    <meta property="og:description" content="Aqui vem um texto para ser mostrado ao compartilhar no facebook">
    
    <meta property="og:title" content="Uma foto do Github">

    <!-- twitter 
        O Twitter usa o atributo name diferente do Facebook que resolveu usar o property .
    -->
    <meta name="twitter:title" content="Github">
</head>
```