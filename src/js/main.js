// https://swiperjs.com/demos/
//if ( $(window).width() <= 1440 ) {

const menuLinks = document.querySelector(".navigation-links");
const menuImg = document.querySelector(".navigation-icon__item");

const menuCross = "/img/mobile/index/menu-cross.png";
const menuHumb = "/img/mobile/index/menu-burger.png";

function myFunction() {
  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
    menuImg.src = menuHumb;
  } else {
    menuLinks.style.display = "block";
    menuImg.src = menuCross;
  }
}


var mySwiper = new Swiper(".swiper-container", {
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-container .swiper-pagination",
  },
});






function initMenuActivePage() {
  const links = document.querySelectorAll(
    ".site-navigation .navigation-list__link"
  );

  const currentLocationPathname = window.location.pathname;

  Array.from(links).map((link) => {
    const href = link.getAttribute("href");

    if (href === currentLocationPathname) {
      link.classList.add("navigation-list__link--active");
    }
  });
}
initMenuActivePage();


