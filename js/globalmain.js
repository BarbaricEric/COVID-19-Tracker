 if (document.documentElement.clientWidth < 480) { 
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=device-width, height=device-height, initial-scale=0.25, maximum-scale=1.0, user-scalable=yes');
 }
