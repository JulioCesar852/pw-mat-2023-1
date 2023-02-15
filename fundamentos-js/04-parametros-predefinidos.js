/* Função que calcula a á rea de uma figura geometrica plana */
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

