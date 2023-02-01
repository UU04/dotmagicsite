// CONFIG

emerg = 0 ;
//normal : 0 | monioring : 1 | EMERGENCY : 2 | Back-EMERG : 3
//monitoring mode -> MONITORING IN PROGRESS
//EMERGENCY mode -> blockes all users from normal options
//Back-EMERG mode -> blockes all users from any database-related options(Login, Pin Board(Lounge))

//
resizelimit= 1200;
//

if(emerg != 0) {
  document.getElementById('nbox').style.display = "none";
  console.log(`${emerg} MODE has been activated in this moment.`);
}
if(emerg == 1){
  document.getElementById('mode-1').style.display = "block";
  document.getElementById('wbox').style.display = "";
}
if(emerg == 2){
  document.getElementById('mode-2').style.display = "flex";
  document.getElementById('canvas').style.display = "none";
  document.getElementById('feed').style.display = "none";
  document.getElementById('dsc').style.display = "none";
  document.getElementById('vvm').style.display = "none";
}
if(emerg == 3){
}

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

function widthFx() {
  if(window.innerWidth <resizelimit){
    // on();
    document.getElementsByClassName('sub-content')[0].style.display = "none";
  }
  if(window.innerWidth >= resizelimit){
    // off();
    document.getElementsByClassName('sub-content')[0].style.display = "block";
  }
}

function syswarn(a){
  if(a==0) {
    document.getElementById('nbox').style.display = "";
    document.getElementById('wbox').style.display = "none";
    document.getElementById('mbox').style.display = "none";
    document.getElementById('ubox').style.display = "none";
    document.getElementById('uxbox').style.display = "none";
  }
  if(a==1) {
    document.getElementById('nbox').style.display = "none";
    document.getElementById('wbox').style.display = "";
    document.getElementById('mbox').style.display = "none";
    document.getElementById('ubox').style.display = "none";
    document.getElementById('uxbox').style.display = "none";
  }
  if(a==2) {
    document.getElementById('nbox').style.display = "none";
    document.getElementById('wbox').style.display = "none";
    document.getElementById('mbox').style.display = "";
    document.getElementById('ubox').style.display = "none";
    document.getElementById('uxbox').style.display = "none";
  }
  if(a==3) {
    document.getElementById('nbox').style.display = "none";
    document.getElementById('wbox').style.display = "none";
    document.getElementById('mbox').style.display = "none";
    document.getElementById('ubox').style.display = "";
    document.getElementById('uxbox').style.display = "none";
  }
  if(a==3) {
    document.getElementById('nbox').style.display = "none";
    document.getElementById('wbox').style.display = "none";
    document.getElementById('mbox').style.display = "none";
    document.getElementById('ubox').style.display = "none";
    document.getElementById('uxbox').style.display = "";
  }
}

widthFx();

addEventListener("resize", (event) => {
  widthFx();
});