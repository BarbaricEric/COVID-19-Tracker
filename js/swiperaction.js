    var swiper = new Swiper('.swiper-infograph', {
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

    var swiper2 = new Swiper('.news-wrapper', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
