const teamsSlider = new Swiper('.teams-slider', {
   slidesPerView: 1.05,
   spaceBetween: 18,
   slidesPerGroup: 1,
   simulateTouch: false,
   initialSlide: 1, /* Стратовый слайдер сам настроишь */

   navigation: {
      nextEl: '.slider__arrow_rigth',
      prevEl: '.slider__arrow_left',  
   },

   breakpoints: {
      1180: {
         slidesPerGroup: 3,
         slidesPerView: 3,
         spaceBetween: 16,
      },

      992: {
         slidesPerGroup: 3,
         slidesPerView: 3,
         spaceBetween: 16,
      },

      776: { 
         slidesPerGroup: 2,
         slidesPerView: 2,
         spaceBetween: 14,
      },

      522: { 
         slidesPerView: 1.6,
      },
  }
});
 