//formas de escrever o mesmo codigo...

/*let valores = [5, 2, 3, 4, 7, 6, 3, 8, 6, 10]
valores.sort()
*/

/*for(let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${[pos]} tem o valor ${valores[pos]}`)
}
    */
   
/*for(let pos in valores) {
    console.log(`a posição ${pos} tem o valor de ${valores[pos]}`)
}
*/
let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1) {
    console.log('o valor não foi encontrado')
} else {
console.log(`o valor 8 esta na pocisão ${pos}`)
}
