function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('div#res')
    if (fano.Value.length == 0 || Number(fano.valeu) > ano) {
        window.alert('[erro] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            gênero = 'homem'

        } else if (fsex[1].checked) {
            gênero = 'mulher'
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}
