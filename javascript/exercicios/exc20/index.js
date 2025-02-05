var num = [2, 1, 5]
var n = Number(num.value)
num[3] = 9 // adiciona um valor a ultima variavel, usado quando tem poucos valores na variavel
num.push(10) //adiciona um valor a ultima variavel, usado quando tem muitos valores e nao quero contar quantas tem pra descobrir a ultima
num.sort() //coloca os elementos em ordem crescente

var conta = num[4] * 4

console.log(`o resultado da sua conta é:\n ${conta}`)

//num.length diz quantos elementos tem dentro da variavel
