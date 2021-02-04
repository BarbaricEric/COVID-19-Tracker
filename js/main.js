const browserSupport = document.querySelector('.banner-support');
const covidtrackinfo = document.querySelector('.covidtrackupdate');

//Browser Support Banner
setTimeout(() => {browserSupport.style.display = 'none';}, 8.0*1000);

//Covid Tracking Project Info
covidtrackinfo.onmouseover = logMouseOver;

function logMouseOver() {
  covidtrackinfo.style.color = '#1500ff';
  covidtrackinfo.style.background = '#ffff00';
}  

covidtrackinfo.addEventListener('click', ()=>{
	    const url = 'https://covidtracking.com/analysis-updates/covid-tracking-project-end-march-7';
      const win = window.open(url, '_blank');
})
