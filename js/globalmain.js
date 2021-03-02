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
  easing: 'easeInOutSine',
  update: function(anim) {
    console.log("Test");
  }
}).add({
  translateY: -200
}).add({
  translateY: 200
});

animation.finished.then(logFinished);

if (document.documentElement.clientWidth < 900) { 
    const viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=0.50 user-scalable=no');
 } else {
  console.log('Error');
 }


//document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

//https://stackoverflow.com/questions/21419404/setting-the-viewport-to-scale-to-fit-both-width-and-height
//https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
//https://stackoverflow.com/questions/37181403/how-to-set-browser-viewport-size
//https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth
