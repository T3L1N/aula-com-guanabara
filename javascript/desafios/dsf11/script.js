function verificar() {
    var ano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    var a = Number(ano.value)

    if (ano.value.length == 0 || ano.value == 0) {
        alert('[ERRO] Digite o ano para a verificação')
    }
    
    if ((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)) {
        res.innerHTML = `O ano de ${a} <span class="bissexto">É BISSEXTO</span>✅`
    } else {
        res.innerHTML = `O ano de ${a} <span class="nao-bissexto">NÃO É BISSEXTO</span>❌`
    }
}