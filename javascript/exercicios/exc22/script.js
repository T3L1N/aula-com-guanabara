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
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value , valores)) {
        valores.push(Number(num.value))

        //Se for o primeiro Número irá sobrescrever a frase inicial
        if (res1.innerHTML.includes("Digite os valores acima")) {
            res1.innerHTML = `O valor ${num.value} foi adicionado <br>`;
        } else {
            res1.innerHTML += `O valor ${num.value} foi adicionado <br>`; // Adiciona números sem sobrescrever
            res2.innerHTML = 'Ao finalizar, o resultado aparecerá aqui'
        }
    } else {
        alert('[ERRO] Valor inválido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    var res2 = document.querySelector('div#res2')

    if(valores.length == 0) {
        alert('Adicione valores para finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0


        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res2.innerHTML = ''
        res2.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res2.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res2.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res2.innerHTML += `<p>A soma dos valores é: ${soma}.</p>`
        res2.innerHTML += `<p>Media da som dos valores é: ${media.toFixed(2)}</p>`
    }
}

function limpar() {
    var limp = document.querySelector('input#limp')

    res1.innerHTML = 'Digite os valores acima'
    res2.innerHTML = 'Ao finalizar, o resultado aparecerá aqui'
}