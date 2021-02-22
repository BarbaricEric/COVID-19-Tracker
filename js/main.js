const browserSupport = document.querySelector('.banner-support');
const covidtrackinfo = document.querySelector('.covidtrackupdate');

//Browser Support Banner
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ step){
            window.setTimeout(step1, 1000 / 60);
        }
    );
}();
   window.requestAnimFrame(step);
})();


function step1() {
  browserSupport.style.display = 'none';
}

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
