/* Função que calcula a á rea de uma figura geometrica plana */
/*O parâmetro forma fica predefinido com o valor `R`
  Se o valor desse parâmetro não for passado, a função irá assumir que se trata
  */
function calcular_area(base, altura, forma){
    switch(forma) {
        case `R`: //Retângulo
            return base * altura
        case `T`: //Triângulo
            return base * altura / 2
        case `E`: //Eclípse/Círculo 
            return (base / 2) * (altura/2) * Math.PI
        default: // Forma Desconhecida
            return null
    }
}

console.log(`Á rea retângulo 12x16: ${calcular_area(12, 16, `R`)}`)
console.log(`Área triângulo 15x9: ${calcular_area(15, 9, `T`)}`)
console.log(`Área eclipse 10x18: ${calcular_area(10, 18, `E`)}`)
console.log(`Área forma desconhecida 7x13: ${calcular_area(7, 13, `A`)}`)


/* Deixando de passar o parâmetro da forma*/
console.log(`Área retangulo 10x25: ${calcular_area(10,25)}`)

/*
Regras para uso de parâmetro predefinidos em funções:
    1° O parametro predefinido deve vir sempre por útimo na lista de parâmetros.
    2° Pode haver mais de um parâmetro predefinido< mas eles devem vir sempre 
    no final da lista de parâmetros.
*/

