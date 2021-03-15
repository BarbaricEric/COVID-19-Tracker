const browserSupport = document.querySelector('.banner-support');
const covidnews = document.querySelector('.covidnews');

//Browser Support Banner
window.requestAnimationFrame(step1);

function step1() {
	//setTimeout(() => {browserSupport.style.display = 'none';}, 12.0*1000);
	anime({
  targets: browserSupport,
    keyframes: [
    {translateY: -200},
    {translateY: 200}
  ],
  direction: 'alternate',
  loop: false,
  easing: 'spring(1, 80, 10, 0)', //'linear',
  delay: 10000,
  endDelay: 4000,		
  duration: 8000  
});
}

// News Menu
		var menuButton = document.querySelector('.menu-button');
		var openMenu = function () {
			swiper.slidePrev();
		};
		var swiper = new Swiper('.swiper-container-news', {
			slidesPerView: 'auto',
			initialSlide: 1,
			resistanceRatio: 0,
			slideToClickedSlide: true,
			on: {
				slideChangeTransitionStart: function () {
					var slider = this;
					if (slider.activeIndex === 0) {
						menuButton.classList.add('cross');
						// required because of slideToClickedSlide
						menuButton.removeEventListener('click', openMenu, true);
					} else {
						menuButton.classList.remove('cross');
					}
				}
				, slideChangeTransitionEnd: function () {
					var slider = this;
					if (slider.activeIndex === 1) {
						menuButton.addEventListener('click', openMenu, true);
					}
				},
			}
		});

covidnews.addEventListener('click', ()=>{
	    const url = 'https://barbariceric.github.io/COVID-19-Tracker/covidnews';
      const win = window.open(url, '_blank');
})

function addCommas(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}
