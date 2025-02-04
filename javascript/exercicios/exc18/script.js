function contar() {
    var inc = document.querySelector('input#inc')
    var fim = document.querySelector('input#fim')
    var pas = document.querySelector('input#pas')
    var res = document.querySelector('div#res')

    if (inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Não é possivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inc.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}