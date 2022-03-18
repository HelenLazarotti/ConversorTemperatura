function Converter() {
    var valorTem = document.getElementById("valorAdd")
    var temperatura = valorTem.value;
    var tempCerta = parseFloat(temperatura);

    var calcF = (tempCerta * 1.8) + 32

    var mostrarValor = document.getElementById("fa")

    var conversaoFa = `Correspondem á:<br><br> ${calcF}º Fahrenheit.`

    mostrarValor.innerHTML = conversaoFa

    var calcK = tempCerta + 273
    var mostrarValorKel = document.getElementById("kelvin")

    var conversaoKel = `${calcK}º Kelin.`
    mostrarValorKel.innerHTML = conversaoKel

}
