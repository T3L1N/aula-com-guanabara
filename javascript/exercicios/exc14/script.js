var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = 'imagens/manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.png' 
    document.body.style.background = '#fe8c3f'
} else {
    img.src = 'imagens/noite.png' 
    document.body.style.background = '#2c5392'
}

//e2cd9f
//fe8c3f
//2c5392