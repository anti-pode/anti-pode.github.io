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

  //to-top-btn-opacity
  var menu = $(".header-citizens-menu");
  var hight = $(window).height();
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top <= hight-150) {
      menu.removeClass("show");
      hamb.removeClass('unvisible').hide();
      top_logo.show();
      logo.css("display", "none");
      logo_light.css("display", "block");
    } else if (top >= hight + 100) {
      hamb.hide();
      top_logo.hide();
    } else{
      menu.addClass("show");
      hamb.show();
      top_logo.show();
      logo.css("display", "block");
      logo_light.css("display", "none");
    }
  });

  //onepage_scroll

  var menu = $(".header-menu");
  var hamb = $(".hamburger");
  var top_logo = $(".top-logo");
  var logo = $(".logo-pic");
  var logo_light = $(".logo-light-pic");
  var sec2 = $(".section-projects");


  hamb.on('click', function() {
    hamb.toggleClass('is-active');
    menu.toggleClass('hidden').toggleClass('scale');
  });

  $(document).on("mousewheel", function(){
      if ($(document).scrollTop() <= 400 ) {
        $('html,body').animate({
        scrollTop: sec2.offset().top
      }, 500);
      $(document).off("mousewheel")
    }
  })

  

});