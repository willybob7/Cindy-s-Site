var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var i;
showSlides();

function showSlides() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slides[slideIndex - 1].style.display = "block";
  
  // setTimeout(showSlides, 4000);
  setTimeout(fadeOut, 4000);

}

var opacity = 1

function fadeIn() {
  if (opacity > 1) {
    setTimeout(fadeOut, 4000);
  } else {
    opacity += 0.02;
    slides[slideIndex - 1].style.opacity = opacity;
    setTimeout(fadeIn, 5)
  }
}

function fadeOut() {
  if (opacity <= 0) {
    clearInterval(setInterval);
    slides[slideIndex - 1].style.display = "none";
    slideIndex++
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = opacity;
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    fadeIn()
  } else {
    opacity -= 0.02;
    slides[slideIndex - 1].style.opacity = opacity;
    setTimeout(fadeOut, 5)
  }
}