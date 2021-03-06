var altura = 0
var largura = 0

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()


function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 30
    var posicaoY = Math.floor(Math.random() * altura) - 30

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoy = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
}

