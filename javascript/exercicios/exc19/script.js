function contar() {
    var num = document.querySelector('input#num')
    var res = document.querySelector('div#res')
    
    if (num.value.length == 0) {
        alert('[ERRO] Nenhum número foi digitado, por favor digite um número')
    } else {
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''

        while (c <= 10) {
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
            c++
        }
    }
}