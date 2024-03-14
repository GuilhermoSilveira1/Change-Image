let nextImage = window.document.getElementById("proximo");
let priorImage = window.document.getElementById("anterior");
let selectImage = window.document.getElementById("selecionar");
let displayedImage = window.document.getElementById("imagemNaTela");
let title = window.document.getElementById("title");
let selectOtherImage = window.document.getElementById("selectOtherImage");
let maxImage = 20;
let actualImage = 1;
 
nextImage.addEventListener("click",changeImageForward);
priorImage.addEventListener("click", changeImagePrior);
selectImage.addEventListener("click",selectImageOnScreen);
selectOtherImage.addEventListener("click",restartSelection);
 
function changeImageForward() {
    if (actualImage < maxImage){
        actualImage +=1;
        displayedImage.src=`./src/img/${actualImage}.jpg`;
    } else {
        actualImage = 1;
        displayedImage.src=`./src/img/${actualImage}.jpg`;
    }
};
 
function changeImagePrior() {
    if (actualImage > 1) {
        actualImage -=1;
        displayedImage.src=`./src/img/${actualImage}.jpg`;
    } else {
        actualImage = maxImage;
        displayedImage.src=`./src/img/${actualImage}.jpg`;
    }
};
 
function selectImageOnScreen() {
    title.innerText = "Você selecionou esta imagem!";
    window.document.body.style.backgroundImage = `url(./src/img/${actualImage}.jpg)`; // Define a imagem como plano de fundo
    nextImage.classList.add("hidden");
    priorImage.classList.add("hidden");
    selectImage.classList.add("hidden");
    selectOtherImage.classList.remove("hidden");
}


function restartSelection() {
    nextImage.classList.remove("hidden");
    priorImage.classList.remove("hidden");
    selectImage.classList.remove("hidden");
    selectOtherImage.classList.add("hidden");
    title.innerText = "Escolha sua imagem preferida!";
    window.document.body.style.backgroundImage = "none"; // Define a imagem como plano de fundo
}