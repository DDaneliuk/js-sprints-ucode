window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide"),
    prev = document.querySelector(".left"),
    next = document.querySelector(".right");

  let slideIndex = 1;
  showSlides(slideIndex);

  let SlideID;
  function Interval() {
    SlideID = setInterval(() => showSlides(slideIndex++), 3000);
  }
  Interval();

  function showSlides(n) {
    if (n >= slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => (item.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";
    console.log(slideIndex);
  }

  function plusSlide(n) {
    showSlides((slideIndex += n));
    clearInterval(SlideID);
    Interval();
  }

  prev.addEventListener("click", () => {
    plusSlide(-1);
  });

  next.addEventListener("click", () => {
    plusSlide(+1);
  });
});
