# Tipos de Shell

**CSH**
* C Shell
<hr>

**SH**
* Bourne Shell
<hr>

**BASH**
* Bourne Again Shell
<hr>

**KSH**
* Korn Shell
<hr>

**TCSH**
* Shell C Tenex
<hr>

**ZSH**
* Z Shell
<hr>

**JSH**
* Shell Job
<hr>

**DASH**
* Debian Almquist Shell
<hr>
<br>
<br>

Para ver qual é seu **shell** padrão, basta digitar o comando:
```sh
    printenv SHELL
```

Para ver os shells disponíveis para seu sistema use:
```sh
    cat /etc/shells
```

Para mudar o Shell padrão:
```sh
    chsh -s /bin/ 'nome do shell'
```
Veja o Shell de todos os usuários do sistema
```sh
    cat /etc/passwd | cut -d: -f1,7
```