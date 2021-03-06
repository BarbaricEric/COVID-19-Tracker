const browserSupport = document.querySelector('.banner-support');

//Browser Support Banner
/*setTimeout(() => {browserSupport.style.display = 'none';}, 8.0*1000);
anime({
  targets: browserSupport,
    keyframes: [
    {translateY: -200},
    {translateY: 200}
  ],
  direction: 'alternate',
  loop: false,
  easing: 'cubicBezier(.5, .05, .1, .3)',//'spring(1, 80, 10, 0)', //'linear',
  delay: 5000,  
  duration: 8000  
}); */

function logFinished() {
  anime.set(browserSupport, {display: 'none'});
}

var animation = anime.timeline({
  targets: browserSupport,
  delay: 4000,
  duration: 3000,
  endDelay: 4000,
  easing: 'easeInOutSine'
}).add({
  translateY: -200
}).add({
  translateY: 200
});

animation.finished.then(logFinished);

if (document.documentElement.clientWidth < 900) { 
    let viewport = document.querySelector("meta[name=viewport]");
    let allowScale = true;
    const content = allowScale?
        'width=device-width, height=device-height, initial-scale=0.46, user-scalable=no':'width=device-width, height=device-height, user-scalable=yes';
    viewport.setAttribute('content', content);
 } else {    
  console.log('Error');
  let viewport = document.querySelector("meta[name=viewport]"); 
  let allowScale = false;
  const content = allowScale?
        'width=device-width, height=device-height, initial-scale=0.46, user-scalable=no':'width=device-width, height=device-height, user-scalable=yes';
    viewport.setAttribute('content', content); 
 }



//https://stackoverflow.com/questions/21419404/setting-the-viewport-to-scale-to-fit-both-width-and-height
//https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
//https://stackoverflow.com/questions/37181403/how-to-set-browser-viewport-size
//https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth
