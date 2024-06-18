import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function adjustSwiper() {
  const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    slideToClickedSlide: true,
    initialSlide: 1,
    speed: 1000,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 15,
      scale: 0.95,
      slideShadows: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },
      599: {
        slidesPerView: 1.35,
        spaceBetween: 60,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
    },
  });

  return swiper;
}

export default adjustSwiper;
