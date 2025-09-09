 'use strict'

async function buscarImagens () {
    const url = `https://dog.ceo/api/breed/hound/images`
    //await e async, são utilizados quando precisamos aguardar uma resposta
    const response = await fetch(url)
    const imagens = await response.json()
    //retorno de imagens dentro do array com a "mensagem" de todos os itens presentes no json
    return imagens.message
}


function mostrarResposta(dog){

    const dogs = document.getElementById('dogs')
    const label = document.createElement('div')
    const input = document.createElement('input')
    const imagens = document.createElement('img')
    

    dogs.appendChild(input)
    dogs.appendChild(imagens)
    label.appendChild(input)

}


buscarImagens()