function calcular() {
    var nm = document.querySelector('input#nm')
    var t1 = document.querySelector('input#t1')
    var t2 = document.querySelector('input#t2')
    var t3 = document.querySelector('input#t3')
    var res = document.querySelector('div#res')
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var n3 = Number(t3.value)
    var md = (n1 + n2 + n3) / 3

    if (t1.length == 0 || t2.length == 0 || t3.length == 0 || t1 > 10 || t2 > 10 || t3 > 10) {
        alert('[ERRO] Digite suas notas corretamente')
    } else if (md >= 6 && md == 10) {
        res.innerHTML = `<p>Parabéns ${nm}, você está APROVADO!!!</p>`
    } else {
        res.innerHTML = `<p>${nm}, infelimente você está REPROVADO!!!</p>`
    }
}