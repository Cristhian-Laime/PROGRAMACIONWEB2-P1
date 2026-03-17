/* carrusel */
const track = document.querySelector(".track")
const slide = document.querySelectorAll(".slide")
const btnSig = document.querySelector(".siguiente")
const btnAntes = document.querySelector(".antes")

let index = 0;

btnSig.addEventListener("click", ()=>{
    index++;
    if (index > slide.length-1){
        index = 0;
    } 
    updateSlide();
})
btnAntes.addEventListener("click", ()=>{
    index--;
    if (index < 0) {
        index = slide.length-1;
    }
    updateSlide();
})
function updateSlide(){
    track.style.transform = `translateX(-${index*100}%)`
}