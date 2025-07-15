function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var horadodia = new Date()
var hora = horadodia.getHours()
msg.innerHTML = `Agora são ${hora} horas.`


if(hora >= 0 && hora < 6) {
    //boa madrugada
    img.src = 'madrugada.webp'
    saudacao.innerHTML = 'tenha uma excelente madrugada'

} else if(hora >=6 && hora < 12) {
    //bom dia
    img.src = 'manhã.webp'
    saudacao.innerHTML = 'tenha uma excelente manhã!!!'
    } else if(hora >=12 && hora < 18) {
        //boa tarde
    img.src = 'tarde.webp'
    saudacao.innerHTML = 'tenha uma excelente tarde!!!'
    } else {
        //boa noite
    img.src = 'noite.webp'
    saudacao.innerHTML = 'tenha uma excelente noite!!!'
    }
}
