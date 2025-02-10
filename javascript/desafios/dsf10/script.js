function calcular() {
    var numa = document.querySelector('input#numa')
    var numb = document.querySelector('input#numb')
    var numc = document.querySelector('input#numc')
    var res = document.querySelector('div#res')

    if (numa.value.length == 0 || numa.value == 0 || numb.value.length == 0 || numb.value == 0 || numc.value.length == 0 || numc.value == 0) {
        alert('[ERRO] Insira um valor para todos os coeficientes, e sse valor não pode ser 0 pois sera uma equação de segundo gau incompleta')
    } else {
        var na = Number(numa.value)
        var nb = Number(numb.value)
        var nc = Number(numc.value)
        var delta = nb **2 - 4 * na * nc


        res.innerHTML = `<p>A equação atual é ${na}x<sup>2</sup> + ${nb}x + ${nc} = 0</p>`
        res.innerHTML += `<p>a fórmula de Δ é: ${nb}<sup>2</sup> -4.${na}.${nc}</p>`
        res.innerHTML += `<p>o valor de Δ é: ${delta}</p>`

        if (delta < 0) {
            res.innerHTML += `Não tem como prosseguir pois o Δ esta negativo`
        } else {
            var raizdelta = Math.sqrt(delta)
            var x1 = (-nb + raizdelta) / (2 * na)
            var x2 = (-nb - raizdelta) / (2 * na)
            
            
            res.innerHTML += `<p>A formula será: 
            <math>
                <mfrac>
                    <mrow>
                        <mo>-</mo><mi>${nb}</mi> 
                        <mo>±</mo> 
                        <msqrt><mn>${delta}</mn></msqrt>
                    </mrow>
                    <mrow>
                        <mi>2*${na}</mi>
                    </mrow>
                </mfrac>
            </math></p>`

            res.innerHTML += `<p>x<sup>1</sup> = 
            <math>
                <mfrac>
                    <mrow>
                        <mo>-</mo><mi>${nb}</mi> <mo>-</mo><msqrt><mn>${delta}</mn></msqrt>
                    </mrow>
                    <mrow>
                        <mi>2*${na}</mi>
                    </mrow>
                </mfrac>
            </math></p>`
            res.innerHTML += `<p>x<sup>2</sup> = 
            <math>
                <mfrac>
                    <mrow>
                        <mo>-</mo><mi>${nb}</mi> <mo>+</mo><msqrt><mn>${delta}</mn></msqrt>
                    </mrow>
                    <mrow>
                        <mi>2*${na}</mi>
                    </mrow>
                </mfrac>
            </math></p>`
            res.innerHTML += `<p>x<sup>1</sup> = ${x1.toFixed(2)}</p>`
            res.innerHTML += `<p>x<sup>2</sup> = ${x2.toFixed(2)}</p>`
        }
    }
}