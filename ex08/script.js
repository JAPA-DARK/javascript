function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    } if (fsex[0].checked) {
        genero = 'homem'

        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'foto-menino.webp')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovem-homem.webp')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'foto-jovem-adulto.webp')
        } else {
            //idoso
            img.setAttribute('src', 'foto-idoso.webp')
        }

    } else if (fsex[1].checked) {
        genero = 'mulher'

        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'foto-menina.webp')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovem-mulher.webp')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'foto-jovem adulta.webp')
        } else {
            //idoso
            img.setAttribute('src', 'foto-idosa.webp')
        }
    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos de idade.`
    res.style.textAlign = 'center'
    res.appendChild(img)
}
