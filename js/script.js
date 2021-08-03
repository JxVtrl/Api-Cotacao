
// TEMPO DO USUARIO
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



// URL API
const api_url = "https://api.hgbrasil.com/finance?format=json-cors&key=78663b30"

// CHAMADA DA API
api(api_url)

async function api(url){
    const response = await fetch(url)
    
    let resposta = await response.json()

    console.log(resposta.results.currencies)

    let source = resposta.results.currencies.source
    
    imagem(source)


    let ARS = resposta.results.currencies.ARS
    let AUD = resposta.results.currencies.AUD
    let BTC = resposta.results.currencies.BTC
    let CAD = resposta.results.currencies.CAD
    let CNY = resposta.results.currencies.CNY
    let EUR = resposta.results.currencies.EUR
    let GBP  = resposta.results.currencies.GBP
    let JPY = resposta.results.currencies.JPY
    let USD = resposta.results.currencies.USD

    imprime(ARS, AUD, BTC, CAD, CNY, EUR, GBP, JPY, USD)

    variacao(source)

}


// DEFINE IMAGEM DA MOEDA E NOME
function imagem(src){
    let moeda = document.getElementById("moeda").innerHTML
    let imagem = document.getElementById("imagem")

    switch(src){
        case 'BRL':
            moeda = 'Real Brasileiro'
            imagem.src = "assets/BRL.png"
        break;
        case 'USD':
            moeda = 'Dólar Americano'
            imagem.src = "assets/USD.png"
        break;
        case 'EUR':
            moeda = 'Euro'
            imagem.src = "assets/EUR.png"
        break;
        case 'ARS':
            moeda = 'Peso Argentino'
            imagem.src = "assets/ARS.png"
        break;
        case 'CAD':
            moeda = 'Dólar Canadense'
            imagem.src = "assets/USD.png"
        break;
        case 'AUD':
            moeda = 'Dólar Australiano'
            imagem.src = "assets/USD.png"
        break;
        case 'JPY':
            moeda = 'Yen Japonês'
            imagem.src = "assets/JPY.png"
        break;
        case 'BTC':
            moeda = 'Bitcoin'
            imagem.src = "assets/BTC.png"
        break;
    }
}

// IMPRIME OS VALORES NO HTML
function imprime(ARS, AUD, BTC, CAD, CNY, EUR, GBP, JPY, USD){
    let ARS_buy = document.getElementById("ARS-BUY")
    ARS_buy.innerHTML = ARS.buy
    let ARS_sell = document.getElementById("ARS-SELL")
    ARS_sell.innerHTML = ARS.sell
    if(ARS.sell == null){ ARS_sell.innerHTML = ARS_buy.innerHTML }

    let AUD_buy = document.getElementById("AUD-BUY")
    AUD_buy.innerHTML = AUD.buy
    let AUD_sell = document.getElementById("AUD-SELL")
    AUD_sell.innerHTML = AUD.sell
    if(AUD.sell == null){ AUD_sell.innerHTML = AUD_buy.innerHTML }

    let BTC_buy = document.getElementById("BTC-BUY")
    BTC_buy.innerHTML = BTC.buy
    let BTC_sell = document.getElementById("BTC-SELL")
    BTC_sell.innerHTML = BTC.sell
    if(BTC.sell == null){ BTC_sell.innerHTML = BTC_buy.innerHTML }


    let CAD_buy = document.getElementById("CAD-BUY")
    CAD_buy.innerHTML = CAD.buy
    let CAD_sell = document.getElementById("CAD-SELL")
    CAD_sell.innerHTML = CAD.sell
    if(CAD.sell == null){ CAD_sell.innerHTML = CAD_buy.innerHTML }

    let CNY_buy = document.getElementById("CNY-BUY")
    CNY_buy.innerHTML = CNY.buy
    let CNY_sell = document.getElementById("CNY-SELL")
    CNY_sell.innerHTML = CNY.sell
    if(CNY.sell == null){ CNY_sell.innerHTML = CNY_buy.innerHTML }

    let EUR_buy = document.getElementById("EUR-BUY")
    EUR_buy.innerHTML = EUR.buy
    let EUR_sell = document.getElementById("EUR-SELL")
    EUR_sell.innerHTML = EUR.sell
    if(EUR.sell == null){ EUR_sell.innerHTML = EUR_buy.innerHTML }

    let GBP_buy = document.getElementById("GBP-BUY")
    GBP_buy.innerHTML = GBP.buy
    let GBP_sell = document.getElementById("GBP-SELL")
    GBP_sell.innerHTML = GBP.sell
    if(GBP.sell == null){ GBP_sell.innerHTML = GBP_buy.innerHTML }

    let JPY_buy = document.getElementById("JPY-BUY")
    JPY_buy.innerHTML = JPY.buy
    let JPY_sell = document.getElementById("JPY-SELL")
    JPY_sell.innerHTML = JPY.sell
    if(JPY.sell == null){ JPY_sell.innerHTML = JPY_buy.innerHTML }

    let USD_buy = document.getElementById("USD-BUY")
    USD_buy.innerHTML = USD.buy
    let USD_sell = document.getElementById("USD-SELL")
    USD_sell.innerHTML = USD.sell
    if(USD.sell == null){ USD_sell.innerHTML = USD_buy.innerHTML }
}

function variacao(src){
    let varUSD = src.results.currencies.USD.variation
    let varJPY = src.results.currencies.JPY.variation
    let varEUR = src.results.currencies.EUR.variation
    let varGBP = src.results.currencies.GBP.variation
    let varARS = src.results.currencies.ARS.variation
    let varAUD = src.results.currencies.AUD.variation
    let varCAD = src.results.currencies.CAD.variation
    let varBTC = src.results.currencies.BTC.variation
    let varCNY = src.results.currencies.CNY.variation
}