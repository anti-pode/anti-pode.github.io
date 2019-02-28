$(function() {

  $('ul.sf-menu').superfish({
    animation: {height:'show'},
    delay: 200,
    speed: 'fast'
  });

  $('.form__input').focus(function(){
    $(this).prev('.form__label').removeClass("unvisible");
  });
  $('.form__input').blur(function(){
    if($(this).val().length <= 0){
      $(this).prev('.form__label').addClass("unvisible");
    }
  });

  $('.first-section').find('.owl-carousel').owlCarousel({
    loop:false,
    margin: 50,
    center:true,
    autoWidth:true,
  });

  var count = 0;
  var owl = $('.first-section').find('.owl-carousel');
  owl.owlCarousel();
  $('.slider-button__right').click(function() {
    owl.trigger('next.owl.carousel', [300]);
    if(count == 0) {
      $('.slider-button__bottom').animate({ "left": "+=27px" }, 300 );
      count++;
    }
  });
  $('.slider-button__left').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
    if(count > 0) {
      $('.slider-button__bottom').animate({ "left": "-=27px" }, 300 );
      count--;
    }
  });

  var count = 0;
  var next = $('.first-section').find('.owl-carousel');
  next.owlCarousel();
  next.on('changed.owl.carousel', function() {
    if(count == 0) {
      $('.slider-button__bottom').animate({ "left": "+=27px" }, 300 );
      count++;
    } else if(count > 0) {
      $('.slider-button__bottom').animate({ "left": "-=27px" }, 300 );
      count--;
    }
  });

  $('.section-five').find('.owl-carousel').owlCarousel({
    loop:true,
    margin:150,
    center:true,
    autoWidth:true,
  });

  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 120
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
  
});
