let valores = [8,7,5,3,2,4]
valores.sort()
valores.indexOf(5)
/*
//forma demorada de se fazer 

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


//forma inteligente mas não tão eficiente


for (let numeros = 0; numeros < valores.length; numeros++) {
    console.log(`a posição ${numeros} tem o valor ${valores[numeros]}`)
}

*/

for(let numeros in valores) {
    console.log(`a posição ${numeros} tem o valor de ${valores[numeros]}`)
}
