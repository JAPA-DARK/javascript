function contador() {
let inicio = window.document.getElementById('txtinicio')
let fim = window.document.getElementById('txtfim')
let passo = window.document.getElementById('txtpasso')
let res = window.document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossivel contar! [ digite quantidade de passo ]'
    //window.alert('[ERRO] verifique os dados e tente novamente')

} else {
    res.innerHTML = 'contando: <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0) {
        window.alert('[esse passo é invalido(vou considerar o passo = 1)')
        p = 1
    } else if (i < f) {
        //contagem crescente
    for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
    }
} else {
    // contagem regressiva
    for(let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
    }
}
res.innerHTML += `\u{1F3C1}`
}
}