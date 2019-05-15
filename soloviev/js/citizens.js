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
  var hamb = $(".hamburger");
  var top_logo = $(".top-logo");
  var logo = $(".logo-pic");
  var logo_light = $(".logo-light-pic");
  var sec2 = $(".section-projects");
  var flag = true;

  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ($(window).width() > 578) {
      if ( top <= hight-150) {
        menu.removeClass("show");
        hamb.removeClass('unvisible').hide();
        top_logo.show();
        logo.css("display", "none");
        logo_light.css("display", "block");
      } else if (top >= hight + 100) {
        hamb.addClass("swipe-right");
        top_logo.addClass("swipe-left");
      } else{
        menu.addClass("show");
        hamb.removeClass("swipe-right").show();
        top_logo.removeClass("swipe-left");
        logo.css("display", "block");
        logo_light.css("display", "none");
      }
    } else {
      hamb.removeClass('unvisible');
      menu.slideUp();
      flag = true;
    }
  });

  //onepage_scroll

  hamb.on('click', function() {
    hamb.toggleClass('is-active');
    if ($(window).width() > 576) {
        menu.toggleClass('scale');
    } else if(flag){
        menu.slideDown();
        flag = false;
    } else {
        menu.slideUp();
        flag = true;
    }
  });

  $(document).on("mousewheel", function(){
      if ($(document).scrollTop() <= 400 ) {
        $('html,body').animate({
          scrollTop: sec2.offset().top
      }, 500);
      $(document).off("mousewheel")
    }
  });
  

});