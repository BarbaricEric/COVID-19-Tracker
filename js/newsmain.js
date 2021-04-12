//DOM Elements
const usCaseDeathJh = document.querySelector(".us-testing-two");
const usCaseConfirmJh = document.querySelector(".us-testing");
const browserSupport = document.querySelector('.banner-support');
const usCaseDeath = document.querySelector(".us-case-death");
const usCaseConfirm = document.querySelector(".us-case-confirmed"); 
const globalapi2 = 'https://api.covid19api.com/summary';

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

function addCommas(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}

//Global Count from covid19-api.org ('https://covid19-api.org/api/timeline')
 fetch(globalapi2, {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
})
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      dayPeriod: 'short',
      timeZone: 'America/Los_Angeles'
   };
   const date = new Date();
   const datea = new Intl.DateTimeFormat('default', options).format(date);    
   usCaseConfirmJh.textContent = addCommas(data.Global.TotalConfirmed) + ' as of ' + datea;
   usCaseDeathJh.textContent = addCommas(data.Global.TotalDeaths) + ' as of ' + datea;
 });

//US Count from covid19-api.org      
 fetch('https://api.covid19api.com/total/dayone/country/united-states', {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
}).then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', 
      dayPeriod: 'short',
      timeZone: 'America/Los_Angeles'
   };
   const date = new Date();
   const datea = new Intl.DateTimeFormat('default', options).format(date)   
   usCaseDeath.textContent = addCommas(data[(data.length - 1)].Deaths) + ' as of ' + datea;   
   usCaseConfirm.textContent = addCommas(data[(data.length - 1)].Confirmed) + ' as of ' + datea;    
  });
