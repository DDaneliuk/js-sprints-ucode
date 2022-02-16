let arraySlide = Array.from(document.getElementsByClassName("slide"));
let slideIndex = 1;
let interval = setInterval(() => showSlide(slideIndex++), 3000);
function BackSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function NextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


function showSlide(index){ 
    if (index < 1){
        slideIndex=arraySlide.length;
        index = arraySlide.length;
    }
    if (index > arraySlide.length){
        slideIndex = 1;
        index = 1;
    }
    for(i=0; i<arraySlide.length; i++){
        arraySlide[i].style.display="none";
        arraySlide[index-1].style.display="block";
    }
     
}
