function calcular() {
    var nome = document.querySelector('input#nm')
    var t1 = document.querySelector('input#t1')
    var t2 = document.querySelector('input#t2')
    var t3 = document.querySelector('input#t3')
    var res = document.querySelector('div#res')
    var nm = nome.value
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var n3 = Number(t3.value)
    var md = (n1 + n2 + n3) / 3

    if (nm.length == 0 || t1.length == 0 || t2.length == 0 || t3.length == 0 || t1 > 10 || t2 > 10 || t3 > 10) {
        alert('[ERRO] Preencha todas as lacunas corretamente')
    } else if (md >= 6) {
        res.innerHTML = `<p>Sua média final é ${md.toFixed(1)}</p>`
        res.innerHTML += `<p>Parabéns ${nm}, você está <span class="aprovado">APROVADO!!!</span></p>`
    } else {
        res.innerHTML = `<p>Sua média final é ${md.toFixed(1)}</p>`
        res.innerHTML += `<p>${nm}, infelimente você está <span class="reprovado">REPROVADO!!!</span></p>`
    }
}