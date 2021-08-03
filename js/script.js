setInterval(agora, 1000)

function agora(){
    let d = new Date()

    let day = d.getDate()
    let month = d.getMonth() + 1
    let year = d.getFullYear()

    if(day < 10 ) day = "0" + day
    if(month < 10 ) month = "0" + month

    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()

    if(hour < 10 ) hour = "0" + hour
    if(min < 10 ) min = "0" + min
    if(sec < 10 ) sec = "0" + sec

    let time = hour + ":" + min + ":" + sec

    let date = day + "/" + month + "/" + year

    document.getElementById("hora").innerHTML = time
    document.getElementById("data").innerHTML = date
}

imagem()

function imagem(){
    let moeda = document.getElementById("moeda").innerHTML
    let imagem = document.getElementById("imagem")

    switch(moeda){
        case 'Real Brasileiro':
            imagem.src = "assets/BRL.png"
        break;
        case 'Dolar Americano':
            imagem.src = "assets/USD.png"
        break;
        case 'Euro':
            imagem.src = "assets/EUR.png"
        break;
        case 'Peso Argentino':
            imagem.src = "assets/ARS.png"
        break;
        case 'Dolar Canadense':
            imagem.src = "assets/USD.png"
        break;
        case 'Dolar Australiano':
            imagem.src = "assets/USD.png"
        break;
        case 'Yen Japonês':
            imagem.src = "assets/JPY.png"
        break;
        case 'Bitcoin':
            imagem.src = "assets/BTC.png"
        break;
    }
}

const api_url = "https://api.hgbrasil.com/finance?format=json-cors&key=78663b30"

api(api_url)

async function api(url){
    const response = await fetch(url)
    
    let resposta = await response.json()

    console.log(resposta.results.currencies)

    let ARS = resposta.results.currencies.ARS
    let AUD = resposta.results.currencies.AUD
    let BTC = resposta.results.currencies.BTC
    let CAD = resposta.results.currencies.CAD
    let CNY = resposta.results.currencies.CNY
    let EUR = resposta.results.currencies.EUR
    let GBP  = resposta.results.currencies.GBP
    let JPY = resposta.results.currencies.JPY
    let USD = resposta.results.currencies.USD

}


