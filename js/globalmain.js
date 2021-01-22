const browserSupport = document.querySelector('.banner-support');
const p = document.querySelector('tr');

//Browser Support Banner
setTimeout(() => {browserSupport.style.display = 'none';}, 8.0*1000);

//Mouse Hover
p.onmouseover = logMouseOver();

function logMouseOver() {
  p.style.backgroundColor = '#FFD700';
  p.style.transition = 'background-color .5s';
}

if (document.documentElement.clientWidth < 480) { 
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=device-width, height=device-height, initial-scale=0.25, maximum-scale=1.0, user-scalable=yes');
 }
