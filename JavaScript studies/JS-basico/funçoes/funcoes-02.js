function mediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2;

    if(media >= 7) {
        console.log(`Aluno Aprovado, sua nota foi: ${media}`);
    } else if(media < 7) {
        console.log(`Aluno reprovado, sua nota foi: ${media}`);
    }
}

function aluno(nome, curso){
    var mensagem = `Seja Bem vindo ${nome} ao curso ${curso}`;

    console.log(mensagem);
}