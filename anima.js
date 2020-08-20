$(function () {
  $('.ani').textillate({
    loop: true,  
    minDisplayTime: 3000,  
    initialDelay: 1000,  
    autoStart: true,  

    in: {
      effect: 'fadeIn',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false
    },  

    out: {
      effect: 'fadeOut',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false
    }
  });
})