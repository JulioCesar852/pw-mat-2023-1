let nome =`Valcicleide`
let idade = 20
let cidade = `Franca/SP`

console.log(`Meu nome é ` + nome + `, tenho ` + idade + ` anos e moro em ` + cidade + `.`)

/* Mesma mensagem usando string template 
    String templates são strings especiais delimitadas 
    pelas caracteres ``(acentos graves, "craser"), que 
permitem a interpolação direta de variáveis no meio delas */

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro ${cidade}.`)

/* Dentro de uma string template, não estamos limitados a colocar apenas variáveis entre ${}. Podemos colocar qualquer código JS valido ali.*/

console.log(`Daqui 5 anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`) 
                                    /*toUpperCase() (Deixa maiusculo)*/
                                    