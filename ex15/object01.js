let amigo = {nome: 'jose', 
    sexo: 'M',
    peso: 85.4,
    engordar(p){
        console.log('engordou')
        this.peso += p
        
    }}

    amigo.engordar(2)
console.log(`${amigo.nome} pese ${amigo.peso} kg e seu sexo é ${amigo.sexo}`)