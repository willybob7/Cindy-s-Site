var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var i;
var opacity = 1;
showSlides();

function showSlides() {
  slideIndex++;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(fadeOut, 4000);
}

function fadeIn() {
  if (opacity > 1) {
    setTimeout(fadeOut, 4000);
  } else {
    opacity += 0.01;
    slides[slideIndex - 1].style.opacity = opacity;
    setTimeout(fadeIn, 5);
  }
}

function fadeOut() {
  if (opacity <= 0) {
    clearInterval(setInterval);
    slides[slideIndex - 1].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = opacity;
    slides[slideIndex - 1].style.display = "block";
    fadeIn();
  } else {
    opacity -= 0.01;
    slides[slideIndex - 1].style.opacity = opacity;
    setTimeout(fadeOut, 5);
  }
}

$(".menu-toggle").click(function() {
  $(".site-nav").toggleClass("site-nav--open", 500);
  $(this).toggleClass("open");
});
