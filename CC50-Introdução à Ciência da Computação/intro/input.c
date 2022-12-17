#include <stdio.h>
#include <cs50.h> // Adicionar a biblioteca do CS50

int main(void) {
    // get_string é uma função específica da biblioteca do CS50!

    string nome = get_string("Digite seu nome: \n");
    printf("Seja Bem-vindo,%s \n",nome);
}