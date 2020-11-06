    var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },  
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,
      keyboard: true,
    });
