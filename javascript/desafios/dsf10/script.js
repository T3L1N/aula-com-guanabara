function formatarCoeficiente(n, isFirst = false) {
    if (isFirst) return n.toString()
    return n > 0 ? `+ ${n}` : `- ${Math.abs(n)}`
}

function formatarParaFormula(n) {
    return n < 0 ? `(${n})` : n
}

function calcular() {
    var numa = document.querySelector('input#numa')
    var numb = document.querySelector('input#numb')
    var numc = document.querySelector('input#numc')
    var res = document.querySelector('div#res')

    if (numa.value.length == 0 || numa.value == 0 || numb.value.length == 0 || numb.value == 0 || numc.value.length == 0 || numc.value == 0) {
        alert('[ERRO] Insira um valor para todos os coeficientes, e sse valor não pode ser 0 pois sera uma equação de segundo grau incompleta')
    } else {
        var na = Number(numa.value)
        var nb = Number(numb.value)
        var nc = Number(numc.value)
        var delta = nb **2 - 4 * na * nc

        res.innerHTML = `<p>A equação atual é ${formatarCoeficiente(na, true)}x<sup>2</sup> ${formatarCoeficiente(nb)}x ${formatarCoeficiente(nc)} = 0</p>`
        res.innerHTML += `<p>a fórmula de Δ é: ${formatarParaFormula(nb)}<sup>2</sup> - 4 • ${formatarParaFormula(na)} • ${formatarParaFormula(nc)}</p>`
        res.innerHTML += `<p>o valor de Δ é: ${delta}</p>`

        if (delta < 0) {
            res.innerHTML += `Não tem como prosseguir pois o Δ esta negativo`
        } else {
            var rdelta = Math.sqrt(delta)
            var x1 = (-nb + rdelta) / (2 * na)
            var x2 = (-nb - rdelta) / (2 * na)
            var denominador = 2 * na
            
            res.innerHTML += `<p>A formula será: 
            <math>
                <mfrac>
                    <mrow>
                        <mo>-</mo><mi>${formatarParaFormula(nb)}</mi> 
                        <mo>±</mo> 
                        <msqrt><mn>${delta}</mn></msqrt>
                    </mrow>
                    <mrow>
                        <mi>2•${formatarParaFormula(na)}</mi>
                    </mrow>
                </mfrac>
            </math></p>`

            res.innerHTML += `<p>x' = 
            <math>
                <mfrac>
                    <mrow>
                        <mo>-</mo><mi>${formatarParaFormula(nb)}</mi> <mo>+</mo><mn>${Number.isInteger(rdelta) ? rdelta : rdelta.toFixed(2)}</mn>
                    </mrow>
                    <mrow>
                        <mi>${denominador}</mi>
                    </mrow>
                </mfrac>
            </math></p>`
            res.innerHTML += `<p>x" = 
            <math>
                <mfrac>
                    <mrow>
                        <mo>-</mo><mi>${formatarParaFormula(nb)}</mi> <mo>-</mo><mn>${Number.isInteger(rdelta) ? rdelta : rdelta.toFixed(2)}</mn>
                    </mrow>
                    <mrow>
                        <mi>${denominador}</mi>
                    </mrow>
                </mfrac>
            </math></p>`
            res.innerHTML += `<p>x' = ${Number.isInteger(x1) ? x1 : x1.toFixed(2)}</p>`
            res.innerHTML += `<p>x" = ${Number.isInteger(x2) ? x2 : x2.toFixed(2)}</p>`
        }
    }
}
