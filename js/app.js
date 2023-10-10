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

for(let i = 0; i < arrayImages.length; i++) {
    const currentIMG = arrayImages[i];
    //console.log(currentIMG)
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
let currentIMG = imgElements[0]
currentIMG.classList.add('active')
let classActive = true ;

//aggiungere alle frecce un eventlistener
btndownDOMElement = document.getElementById('btn-down')
btndownDOMElement.addEventListener ('click', function (){
    
    
})    

/*

}*/
// AL CLICK la classe active viene aggiunta all'immagine successiva a quella mostrata. 

