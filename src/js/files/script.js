// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

//* Jquery
$('.video-slider').slick({
  slidesToScroll: 1,
  slidesToShow: 1,
  easing: 'ease-in-out',
  speed: 400,
  // dots: true,
  arrows: false,
  infinite: true,
});

$('.photo-slider__body').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  rows: 2,
  dots: false,
  prevArrow: false,
  nextArrow: '.photo-slider__next',
  infinite: false,
  lazyLoad: 'ondemand',
});

$('.photo-slider')
  .find('a')
  .each(function () {
    $(this).fancybox();
  });

//* Progress Bar
const progressLine = document.querySelector('.progress-bar__line');
let windowHeight = 0;
let pageHeight = 0;
document.addEventListener('DOMContentLoaded', () => {
  windowHeight = window.innerHeight;
  pageHeight = document.querySelector('.wrapper').offsetHeight - windowHeight;
});
document.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
  pageHeight = document.querySelector('.wrapper').offsetHeight - windowHeight;
});

const progressChange = function () {
  const scrolled = window.scrollY;
  progressLine.style.width = `${(scrolled / pageHeight) * 100}%`;
};
window.addEventListener('scroll', progressChange);
