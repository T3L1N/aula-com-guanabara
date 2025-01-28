var hr = 21
console.log(`Agora sao exatamente ${hr} horas`)
if (hr < 5) {
    console.log('Boa Madrugada')
} else if (hr < 12) {
    console.log('Bom dia')
} else if (hr <= 18) {
    console.log('Boa Tarde')
} else if (hr <= 23) {
    console.log('Boa Noite')
}