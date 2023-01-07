var area = document.getElementById('area');

function entrar() {
    var nome = prompt("Digite seu Nome: ");
    var sobreNome = prompt("Digite seu Sobre Nome");

    if(nome === '' || nome === null) {
        alert("Ops algo deu errado");
        area.innerHTML = "Clique no botão para acessar...";
    } else{
        area.innerHTML = `Bem-Vindo ${nome} ${sobreNome} ` + " " ;
        //alert(`Ola ${nome} ${sobreNome}`);

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Limpar Tudo";
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);
    }

}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Tela Limpa!";
}
