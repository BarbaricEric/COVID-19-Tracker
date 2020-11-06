    var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      autoplay: {
        delay: 2500,
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

    });
