//Alguns dados de uma usuario
let fullname = `Joniscleison Junqueira Júnior`
let username = `junin`
let group = `alunos`
/*
let user = {
    fullname: fullname,
    username: username,
    group: group 
}
*/
/*  Criando um objeto a partir das variáveis acima.
    Note que o nome das propriedades(á esquerda)
    coincide com o nome das variáveis(á direita)
*/
/*  Criando um objeto equivalente ao do código acima,
usando propriedades abreviadas.
    Não é necessário repetir o mesmo  identificador
antes e depois do símbolo
*/
let user = {
    fullname,
    username,
    group
}

console.log(user) 

/*Um objeto pode misturar propriedades abreviadas e propriedades nâo abreviadas*/
let user2 = {
    fullname,
    username,
    password: `abc123`, // Propriedades não abreviadas
    group,
    last_login: `2023-02-16 08:21:43` // Propriedades não abreviadas
}


console.log(user2)

/* Se não for abreviada precisa colocar algo depois dos ":" 

/* Depuração usando propriedades abreviadas*/

/* Exibindo o valor de duas variáveis. Veja que os valores
são exibidos, mas a saída não informa de quais variáveis
provêm os valores */
let x = 10, y = `batata`
console.log(x, y)

/* Saída Melhorada: passando um objeto com propriedades 
abreviadas para console.log(), como uma forma de sabermos
de quais  variáveis provêm os valores. */
console.log({x, y})


