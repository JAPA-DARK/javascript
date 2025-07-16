function tabuada() {
    let numero = window.document.getElementById('txtnumber')
    let tabuada = window.document.getElementById('selecttab')
    if(numero.value.length == 0) {
        window.alert('digite um numero')
        

    }else {
        
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        for(let c = 1; c <= 20; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }
    }
}