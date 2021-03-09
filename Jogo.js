var altura = 0
var largura = 0
var vidas = 1

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustarTamanhoPalcoJogo()


function posicaoRandomica() {
    // remover o mosquito anterior (caso ele exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if(vidas>3){
           window.location.href = 'fim_de_jogo.html'
        }else{
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 30
    var posicaoY = Math.floor(Math.random() * altura) - 30

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoy = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + '  ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()

    }

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

    }
}


function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}
