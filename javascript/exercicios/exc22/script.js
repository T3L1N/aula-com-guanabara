var num = document.querySelector('input#num')
var res1 = document.querySelector('div#res1')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOF(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value , valores)) {
        alert('Tudo certin!')
    } else {
        alert('[ERRO] Valor inválido ou ja encontrado na lista!')
    }
}

function finalizar() {
    var res2 = document.querySelector('div#res2')
}