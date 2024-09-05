function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'bomdia.webp'
        document.body.style.background = '#FAE06D'
    } else if(hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'boatarde.webp'
        document.body.style.background = '#FA8C1C'
    } else {
        //boa noite
        img.src = 'boanoite.webp'
        document.body.style.background = '#3937A5'
    }
}
