      const ipad = window.matchMedia('screen and (max-width: 767px)')
      const menu = document.querySelector('.menu');
     
      const burgerButton = document.querySelector('#burger-menu');
     


      ipad.addListener(validation)

      function validation(event) {
        if (event.matches) {
          burgerButton.addEventListener('click', hideShow)
        } else {
          burgerButton.removeEventListener('click', hideShow)
        }
      }
      validation(ipad);


      function hideShow() {
        if (menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
        } else {
          menu.classList.add('is-active');
        }
      }

      //Animacion del titulo

      function typeEffect(element, speed) {
        var text = element.innerHTML;
        element.innerHTML = "";
        
        var i = 0;
        var timer = setInterval(function() {
          if (i < text.length) {
            element.append(text.charAt(i));
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);
      }
      
      
      // application
      var speed = 75;
      // var h1 = document.querySelector('h1');
      var h1 = document.querySelector('h1');
      // var p = document.querySelector('p');
      var delay = h1.innerHTML.length * speed + speed;
      
      // type affect to header
      // typeEffect(h1, speed);
      
      
      // type affect to body
      // setTimeout(function(){
      //   p.style.display = "inline-block";
      //   typeEffect(p, speed);
      // }, delay);
      