//for toggle menu
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Initialize slideIndex variable
let slideIndex = 0;

// Function to display the current slide
function showSlides() {
  const slides = document.querySelectorAll('.carousel img');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

// Function to show the next slide
function nextSlide() {
  slideIndex++;
  showSlides();
}

// Attach nextSlide function to the click event of the next button
document.querySelector('.next').addEventListener('click', nextSlide);

// Automatic slideshow
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// toggle form
var LoginForm = document.getElementById("LoginForm");
var LoginForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register(){
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
}
function login(){
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
}