// - creare l'array di immagini 
const arrayImages = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]
// - PER OGNI immagine, creare un div che la contenga e inserirlo nell'html
const imgContainerDomElement = document.querySelector('.img-container');
//console.log (imgContainerDomElement)

let currentIMG 

for(let i = 0; i < arrayImages.length; i++) {
    //console.log(currentIMG)
    currentIMG = arrayImages[i];
    const htmlString = `
    <div class="img">
        <img src="${currentIMG}">
    </div>
    `
    //console.log(htmlString)
    imgContainerDomElement.innerHTML += htmlString
}

const imgElements = document.querySelectorAll('.img')
//console.log(imgElements)
let indexSelectedImage = 0; 
//let firstIMG = imgElements[0]
let selectedIMG = imgElements[indexSelectedImage]
selectedIMG.classList.add('active')


//aggiungere alle frecce un eventlistener
btndownDOMElement = document.getElementById('btn-down')
btndownDOMElement.addEventListener ('click', function (){
// AL CLICK la classe active viene aggiunta all'immagine successiva a quella mostrata. 
    if (indexSelectedImage === arrayImages.length) {
        indexSelectedImage = 0 ;
    } else {

    selectedIMG.classList.remove('active')
    selectedIMG = imgElements[indexSelectedImage++]
    selectedIMG.classList.add('active')
    console.log(selectedIMG.classList)
    console.log(indexSelectedImage)
    }
})    

btnUpElement = document.getElementById('btn-up')
btnUpElement.addEventListener('click', function(){

    if (indexSelectedImage === 0 ) {
        indexSelectedImage = (arrayImages.length -1)
    } else {

    selectedIMG.classList.remove('active')
    selectedIMG = imgElements[indexSelectedImage --]
    selectedIMG.classList.add('active')
    console.log(selectedIMG.classList)
    console.log(indexSelectedImage)
    }
    
})








/*

}*/


