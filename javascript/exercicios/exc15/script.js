function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                //rapaz
                img.setAttribute('src', 'imagens/rapaz.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else if (idade < 100) {
                //veio
                img.setAttribute('src', 'imagens/veio.png')
            } else {
                //difunto
                img.setAttribute('src', 'imagens/difunto.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //rapaz
                img.setAttribute('src', 'imagens/moca.png')
            } else if (idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else if (idade < 100) {
                //veio
                img.setAttribute('src', 'imagens/veia.png')
            } else {
                //difunto
                img.setAttribute('src', 'imagens/difunto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}