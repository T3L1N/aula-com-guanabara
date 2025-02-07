function calcular() {
    var cot = document.querySelector('input#cot')
    var real = document.querySelector('input#real')
    var res = document.querySelector('div#res')

    if (cot.value == 0 || real.value == 0 || cot.value.length == 0 || real.value.length == 0) {
        alert('[ERRO] Digite valor corretamente')
    } else {
        var c = Number(cot.value)
        var r = Number(real.value)
        var result = r / c

        res.innerHTML = `Com R$${r.toFixed(2).replace('.', ',')} você tem US$${result.toFixed(2).replace('.', ',')}`
    }

}