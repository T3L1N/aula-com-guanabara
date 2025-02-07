function calcular() {
    var item = document.querySelector('input#item')
    var prc = document.querySelector('input#prc')
    var desc = document.querySelector('input#desc')
    var res = document.querySelector('div#res')

    if (item.value.length == 0 || prc.value == 0 || prc.value.length == 0 || 
        desc.value <= 0 || desc.value > 70 || desc.value.length == 0) {
        alert('[ERRO] Insira as informações corretamente')
    } else {
        var it = String(item.value)
        var p = Number(prc.value)
        var d = Number(desc.value)
        var dsct = d / 100
        var vd = p * dsct
        var vf = p - vd

        res.innerHTML = `<h1>Calculando desconto de ${d}% para ${it}</h1>`
        res.innerHTML += `<p>O valor original do produto era ${p.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
        res.innerHTML += `<p>Você ganhou ${vd.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-${d}%).</p>`
        res.innerHTML += `<p>No fim você vai pagar ${vf.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${it}.</p>`
    }
}