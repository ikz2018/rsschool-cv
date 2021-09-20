const cancelButton = document.querySelector(".cancel__button");
const arrowButton = document.querySelector(".arrow__container");
const leftContainer = document.querySelector(".left__container");
const box = document.querySelector(".box");
const icons = document.querySelector(".icons__animation");
const pageHeader = document.querySelector(".page-header");
const body = document.querySelector(".body");
const javascript = document.querySelector(".javascript");
const javascriptIcon = document.querySelector(".javascript__icon");
const topButton = document.getElementById("top__button");
const screenWidth = window.screen.width;

arrowButton.addEventListener("click", () => {
  arrowButton.classList.add("active__arr");
  
  if (leftContainer.classList.contains("off")) {
    leftContainer.classList.remove("off");
    leftContainer.classList.add("active");
  }
});

cancelButton.addEventListener("click", () => {
  arrowButton.classList.remove("active__arr");
  
  if (leftContainer.classList.contains("active")) {
    leftContainer.classList.remove("active");
    leftContainer.classList.add("off");
  }
});

let setIconColor = icons.addEventListener("mouseover", (evt) => {
  body.style.background = window.getComputedStyle(evt.target).color;
})

let removeIconColor = box.addEventListener("mouseover", () => {
  body.style.backgroundColor = "#C9D6FF";
})

$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

window.addEventListener('scroll', scrollFunction)

topButton.addEventListener("click", topFunction)

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
