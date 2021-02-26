const browserSupport = document.querySelector('.banner-support');

//Browser Support Banner
//setTimeout(() => {browserSupport.style.display = 'none';}, 8.0*1000);
anime({
  targets: browserSupport,
    keyframes: [
    {translateY: -190},
    {translateY: 190}
  ],
  direction: 'alternate',
  loop: false,
  easing: 'spring(1, 80, 10, 0)', //'linear',
  delay: 3000,  
  duration: 8000  
});

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
