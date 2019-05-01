$(function() {

  document.execCommand("defaultParagraphSeparator", false, "p");

  autosize($('textarea'));

  $('.footer-form-input, .footer-form-question-textarea').focus(function(){
    $(this).prev('.footer-form-label').removeClass("unvisible");
  });
  $('.footer-form-input, .footer-form-question-textarea').blur(function(){
    if($(this).val().length <= 0){
      $(this).prev('.footer-form-label').addClass("unvisible");
    }
  });

  //smooth scroll

  $(".menu-link").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
  });

  //onepage_scroll

  var menu = $(".header-menu");
  var hamb = $(".hamburger");
  var top_logo = $(".top-logo");

  hamb.on('click', function() {
    hamb.toggleClass('is-active');
    menu.toggleClass('hidden').toggleClass('scale');
  });

  $('main').fullpage({
    sectionSelector: '.ps-sec',
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'aboutSection', 'contactsSection', 'footer'],

    afterLoad: function(anchorLink, index) {
        if (index == 1) {
            menu.removeClass("show");
            hamb.removeClass('unvisible').hide();
            top_logo.show();
        }
        else if(index > 1) {
            menu.addClass("show");
            hamb.show();
            top_logo.show();
        }
        if (index == 8) {
            hamb.hide();
            top_logo.hide();
        }
    },
  }); 


});

//map settings

var map;
var coordinates_icon = {lat: 56.460055, lng: 84.943255};
var coordinates_map = {lat: 56.460573, lng: 84.946224};
var image = '../img/map_icon.png';
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates_map,
    zoom: 16,
    styles: styles
  }),

   marker = new google.maps.Marker({
      position: coordinates_icon,
      map: map,
      animation: google.maps.Animation.BOUNCE,
      icon: image,
      panBy: 20
  });
}

var styles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]