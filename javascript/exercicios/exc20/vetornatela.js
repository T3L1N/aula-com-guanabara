var valores = [3, 4, 2, 1, 10, 27, 82]

/*for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor o valor ${valores[pos]}`)
}*/

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor o valor ${valores[pos]}`)
}