const image = window.document.getElementById('imagemNaTela')
const previous = window.document.getElementById('anterior')
const next = window.document.getElementById('proximo')
const select = window.document.getElementById('selecionar')
const title = window.document.getElementById('title')
const maxNumber = 10
const actualImageNumber = 1

let nextImage = function() {
    if (actualImageNumber === maxNumber){
        image.src = "./src/img/1.jpg"
    } else {
        actualImageNumber += 1
    }

    image.src = `./src/img/${actualImageNumber}.jpg`
}

let previousImage = function () {
    image.src = `./src/img/${actualImageNumber}.jpg`
}

let selectImage = function() {
    title.innerText = 'Você escolheu esta imagem!'
}