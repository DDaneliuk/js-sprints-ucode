let arr = [
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg",
  "assets/images/img5.jpg",
  "assets/images/img6.jpg",
  "assets/images/img7.jpg",
  "assets/images/img8.jpg",
  "assets/images/img9.jpg",
  "assets/images/img10.jpg",
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg",
  "assets/images/img5.jpg",
  "assets/images/img6.jpg",
  "assets/images/img7.jpg",
  "assets/images/img8.jpg",
  "assets/images/img9.jpg",
  "assets/images/img10.jpg",
];

const options = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.5,
};
function render(arr) {
  result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `<img src="assets/images/download.gif" alt="" data-src="${arr[i]}">`;
  }
  return result;
}

document.querySelector(".box-img").innerHTML = render(arr);
console.log(document.querySelector(".box-img"));

const images = document.querySelectorAll("[data-src]"),
  countArea = document.querySelector(".counter");

let count = 0;

function preloadImage(image) {
  const src = image.getAttribute("data-src");
  if (!src) {
    return;
  }
  image.src = src;
  setCounter();
}

function setCounter() {
  count++;
  countArea.innerHTML = `${count} images loaded from ${images.length}`;
  if (count === images.length) {
    countArea.classList.add("counter-full-load");
  }
  setTimeout(() => {
    if (count === images.length) {
      countArea.classList.remove("counter-full-load");
      countArea.classList.add("hide");
    }
  }, 3000);
}

function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    if (myImgSingle.intersectionRatio > 0) {
      preloadImage(myImgSingle.target);
    }
  });
}

const observer = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

images.forEach((img) => observer.observe(img));
