var num = [5,8,3,4,9]
num[2] = 6
num.push(1)
console.log(num)
console.log(`o nosso vetor tem ${num.length} pocisoes`)
console.log(`possuindo os valores de ${num} na lista`)
console.log(`primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)

if (pos == -1) {
    console.log(`o valor não foi encontrado!`)
} else {
    console.log(`o valor esta na posição ${pos}`)

}