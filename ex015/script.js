function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('erro verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

    if (fsex[0].checked) {
            gênero = 'homem'

                if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'criança-menino.jpg')
    
                } else if (idade > 8 && idade < 18) {
                    img.setAttribute('src', 'jovem-homem.jpg')
    
                } else if (idade > 17 && idade < 65) {
                    img.setAttribute('src', 'adulto-homem.jpg')
    
                } else (idade >=65) {
                    img.setAttribute('src', 'idoso-homem.jpg')
                }

    } else if (fsex[1].checked) {
            gênero = 'mulher'

            if(idade >=0 && idade < 10) {
                //criança

                } else if (idade > 8 && idade < 18) {
                    //jovem

                } else if (idade >17 && idade < 65) {
                    //adulto

                } else  (idade >=65) {
                    //idoso

                }

            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }

}