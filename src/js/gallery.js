import Swiper from 'swiper';
import 'swiper/css/bundle';

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 32,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
  },
});
