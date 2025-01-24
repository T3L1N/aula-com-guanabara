var vel = 64.1
console.log(`A velocidade do seu carro é ${vel}Km/h`)

if (vel >= 60 && vel <= 60 + (60 * 0.069)) {
    console.log(`Tenha mais cuidado ao passar no radar, você quase atingiu a tolerância de 7%, se ultrapssar essa tolerância, voce sera multado`)
}
if (vel >= 60 + (60 * .07)) {
    console.log(`Voce ultrapassou a velociade maxima de 60Km/h com uma tolerância de 7%. PEGA ESSA MULTAAA`)
}
console.log(`Dirija com cuidado`)