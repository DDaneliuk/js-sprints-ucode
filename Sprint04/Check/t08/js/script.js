const images = document.querySelectorAll('img');

const options = {
    root: null,
    rootMargin: '0px',
    thershold: 0.1
}

function handleImg(myImg){
    myImg.forEach(myImgSingle => {
        if(myImgSingle.intersectionRatio > 0){
            loadImage(myImgSingle.target);
        }
    })
}

let count = 0;
let countSpan = document.querySelector('.count');
let countP = document.querySelector('.countP');

function loadImage(image){
    image.src = image.getAttribute('data-src');
    image.classList.add('load');
    count = document.querySelectorAll('.load').length;
    countSpan.innerHTML = count;
    if (count == 20){
        countP.style.backgroundColor = 'green';
        setTimeout(hide, 3000);
    }
}

function hide(){
    countP.style.display = 'none';
}
const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
})