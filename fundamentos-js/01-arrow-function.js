function quadrado(n){
    return n*n
}
console.log(`Função Tradiconal:`,quadrado(7))

const quadradoA = n => n*n

console.log(`Função Arrow:`, quadrado(8))

function soma(a, b, c){
    return a + b + c
}

console.log(`soma dos valores:`, soma(10,5,20))


const somaA = (a,b,c) => a+b+c

console.log(soma(2,3,4))


function aleatorio0a9(){
    return  Math.floor(Math.random() * 10)
}

console.log(`Aleatorio Tradicional:`, aleatorio0a9())

//Arrow function equivalente
// Os parenteses devem estar presentes, mesmo que não haja parametro 
const aleatorio0a9 = () => Math.floor(Math.random() * 10)

console.log(`Aleatorio Arrow`, aleatorio0a9())

/*
Função Tradicional com um parametro e mais de uma linha no corpo
*/
function fatoral(n){
    let resultado = 1
    for(let i = n; i> 1; i--) resultado *= i 
    return resultado
}

console.log(`Fatorial tradicional:`, fatorial(6))

//Arrow function equivalente 
//Não há economia de linhas/codigo em relação ao corpo da função 
const fatorialA = n => {
    let resultado = 1 
    for( let i = n; i > 1; i--) resultado *= 1
}
