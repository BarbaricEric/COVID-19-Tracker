const browserSupport = document.querySelector('.banner-support');

//Browser Support Banner
setTimeout(() => {browserSupport.style.display = 'none';}, 8.0*1000);

if (document.documentElement.clientWidth < 480) { 
    const viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=0.50 user-scalable=no');
 } else {
  console.log('Error');
 }


//viewport = document.querySelector("meta[name=viewport]");
//viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

//const viewport = document.querySelector("meta[name=viewport]");
//viewport.setAttribute('content', 'width=device-width, height=device-height, initial-scale=0.25, maximum-scale=1.0, user-scalable=yes');
