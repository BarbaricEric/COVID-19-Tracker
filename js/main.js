const browserSupport = document.querySelector('.banner-support');
const covidtrackinfo = document.querySelector('.covidtrackupdate');

//Browser Support Banner
let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;

  browserSupport.style.display = 'none';

  if (elapsed < 8000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

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
