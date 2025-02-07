function calcular() {
    var func = document.querySelector('input#func')
    var srl = document.querySelector('input#srl')
    var rjst = document.querySelector('input#rjst')
    var res = document.querySelector('div#res')

    if (func.value.length == 0 || srl.value == 0 || srl.value.length == 0 || 
        rjst.value <= 0 || rjst.value.length == 0) {
        alert('[ERRO] Insira as informações corretamente')
    } else {
        var f = String(func.value)
        var s = Number(srl.value)
        var r = Number(rjst.value)
        var rjt = r / 100
        var vr = s * rjt
        var vf = s + vr

        res.innerHTML = `<p>O salário de ${f} era ${s.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
        res.innerHTML += `<p>Com o aumento de ${r}%, o salário vai aumentar ${vr.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no proximo mês.</p>`
        res.innerHTML += `<p>Apartir do mês que vem ${f} vai passar a ganhar ${vf.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    }
}