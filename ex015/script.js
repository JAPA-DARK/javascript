function verificar(){
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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
            gênero = 'homem'
                if (idade >=0 && idade < 10)
    
                } else if (idade < 18) {
                   
                } else if (idade < 65) {
                    
                } else (idade >=65) {
                   
                }

    } 
    
    else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
                
            } else if (idade < 18) {

            } else if (idade < 65) {
            
            } else (idade >=65) { 
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
