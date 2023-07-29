// CONFIG


//normal : 0 | monioring : 1 | EMERGENCY : 2 | Back-EMERG : 3
//monitoring mode -> MONITORING IN PROGRESS
//EMERGENCY mode -> blockes all users from normal options
//Back-EMERG mode -> blockes all users from any database-related options(Login, Pin Board(Lounge))

//
resizelimit= 1200;
//



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function mode(n){
  
  document.getElementsByClassName('e')[0].style.display = "none";
  document.getElementsByClassName('e')[1].style.display = "none";
  document.getElementsByClassName('e')[2].style.display = "none";
  
  if(n == 1) {
    document.getElementsByClassName('e')[0].style.display = "block";
  }
  if(n == 2) {
    document.getElementsByClassName('e')[1].style.display = "block";
  }
  if(n == 3) {
    document.getElementsByClassName('e')[2].style.display = "block";
  }
  if(n == dev) {
    document.getElementsByClassName('e')[0].style.display = "block";
    document.getElementsByClassName('e')[1].style.display = "block";
    document.getElementsByClassName('e')[2].style.display = "block";
  }
}

mode(3)