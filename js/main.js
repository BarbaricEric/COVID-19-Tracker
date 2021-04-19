const browserSupport = document.querySelector('.banner-support');
const covidtrackinfo = document.querySelector('.covidtrackupdate');
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

//Covid Tracking Project Info
covidtrackinfo.onmouseover = logMouseOver;
covidtrackinfo.onmouseout = logMouseOut;

function logMouseOver() {
  covidtrackinfo.style.color = '#1500ff';
  covidtrackinfo.style.background = '#ffff00';
  covidtrackinfo.style.cursor = 'pointer';	
}

function logMouseOut() {
  covidtrackinfo.style.color = '#000000';
  covidtrackinfo.style.background = 'none';
}  

covidtrackinfo.addEventListener('click', ()=>{
	    const url = 'https://covidtracking.com/analysis-updates/covid-tracking-project-end-march-7';
      const win = window.open(url, '_blank');
})

covidnews.addEventListener('click', ()=>{
	    const url = 'https://barbariceric.github.io/COVID-19-Tracker/covidnews';
      const win = window.open(url, '_blank');
})

//CDC COVID Vaccination Progress
const CDCtabItems = document.querySelectorAll('.tab-item');
const CDCtabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
 removeBorder();
 removeShow();
 //Add border to current tab
 this.classList.add('tab-border');
 //Grab content item from DOM
 const CDCtabContentItem = document.querySelector(`#${this.id}-content`);
 //Add show class
 CDCtabContentItem.classList.add('show');
}

function removeBorder() {
 CDCtabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
 CDCtabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
CDCtabItems.forEach(item => item.addEventListener('click', selectItem));
