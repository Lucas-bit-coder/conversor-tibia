function converter() {
    var valorCoin = document.getElementById("valorCoin").value;
    var valorConvercao = document.getElementById("valorConvercao").value;
    var total = valorCoin*valorConvercao
    var valorTotal = (Number.parseInt(total)).toFixed(2)
    var resultado = "<h3>" +valorTotal+ " gps </h3>"
    document.getElementById("valorTotal").innerHTML = resultado
    return valorCoin * valorConvercao
}