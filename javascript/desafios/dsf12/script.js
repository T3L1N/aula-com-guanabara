function verificar() {
    var prcan = document.querySelector('input#prcan')
    var prcat = document.querySelector('input#prcat')
    var res = document.querySelector('div#res')
    var pan = Number(prcan.value)
    var pat = Number(prcat.value)
    var ps = pat - pan
    var pc = pan - pat
    var vrc = ((pat - pan) / pan) / .01
    var avrc = vrc * (-1)


    if (pan.length == 0 || pan == 0 || pat.length == 0 || pat == 0 || pan == pat) {
        alert('[ERRO] Digite um valor válido ou valores diferentes')
    } else if (pat > pan) {
        res.innerHTML = `<p>O produto custava R$${pan.toFixed(2).replace('.', ',')} e agora custa R$${pat.toFixed(2).replace('.', ',')}</p>`
        res.innerHTML += `<p>Hoje o produto está mais caro</p>`
        res.innerHTML += `<p>O produto subiu R$${ps.toFixed(2).replace('.', ',')} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Um aumento de ${Number.isInteger(vrc) ? vrc : vrc.toFixed(2).replace('.', ',')}% no produto</p>`
    } else {
        res.innerHTML = `<p>O produto custava R$${pan.toFixed(2).replace('.', ',')} e agora custa R$${pat.toFixed(2).replace('.', ',')}</p>`
        res.innerHTML += `<p>Hoje o produto está mais barato</p>`
        res.innerHTML += `<p>O produto caiu R$${pc.toFixed(2).replace('.', ',')} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Um queda de ${Number.isInteger(avrc) ? avrc : avrc.toFixed(2).replace('.', ',')}% no produto</p>`
    }
}

