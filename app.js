 'use strict'

async function buscarImagens (dog) {
    const url = `https://dog.ceo/api/breed/${dog}/images`
    //await e async, são utilizados quando precisamos aguardar uma resposta
    const response = await fetch(url)
    const imagens = await response.json()
    //retorno de imagens dentro do array com a "mensagem" de todos os itens presentes no json
    return imagens.message

  
}


async function criandoElementos(raca){
    const dogs = document.getElementById('dogs')

    dogs.replaceChildren() 
   
    raca.forEach( url => {
    
    
    
    const label = document.createElement('div')
    const imagens = document.createElement('img')
 
    
    imagens.src = url
    label.appendChild(imagens)
    label.classList.add('label')

   dogs.appendChild(label)

    })
    
  

}

async function input() {
    
    const input = document.getElementById('input').value


    const resposta = await buscarImagens(input)
    
  

    criandoElementos(resposta)

}



const botao = document.getElementById('botao')
botao.addEventListener('click' ,  input)