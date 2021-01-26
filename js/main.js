const browserSupport = document.querySelector('.banner-support');
const p = document.querySelectorAll('tr');

//Browser Support Banner
setTimeout(() => {browserSupport.style.display = 'none';}, 8.0*1000);

//Mouse Hover
p.onmouseover = logMouseOver();

function logMouseOver() {
  p.style.backgroundColor = '#FFD700';
  p.style.transition = 'background-color .5s';
}
