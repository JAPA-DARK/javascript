function parimp(numero) {

    if(numero % 2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}
let res = parimp(11)
console.log(`o numero é ${res}`)

