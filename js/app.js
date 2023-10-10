// - creare l'array di immagini 
const arrayImages = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]
// - PER OGNI immagine, creare un div che la contenga
const imgContainerDomElement = document.querySelector('.img-container');
console.log (imgContainerDomElement)

for(let i = 0; i < arrayImages.length; i++) {
    const currentIMG = arrayImages[i];
    //console.log(currentIMG)
    const htmlString = `
    <div>
        <img src="${currentIMG}">
    </div>
    `
    console.log(htmlString)
    imgContainerDomElement.innerhtml += htmlString
}





// - inserire ogni div creato nell'HTML