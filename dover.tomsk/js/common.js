$(function() {

	  $('.external-link').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
         $(this).click(function(event) {
         event.preventDefault();
         event.stopPropagation();
         window.open(this.href, '_blank');
         });
    }
  });

    //lightbox
    $('.lightbox').simpleLightbox();
    $('.lightbox_doc').simpleLightbox();

    //smooth scroll
    $(".smooth-scroll").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

    //maskedinput
    $(".phone").mask("+7(999) 999-9999");

    //to-top-btn-opacity
    var topBtn = $(".to-top-btn");
    var hight = $(window).height();
    $(window).scroll(function() {
      var top = $(this).scrollTop();
      if ( top >= hight-20) {
        topBtn.css('opacity','1')
      } else {
        topBtn.css('opacity', '0')
      }
    });

    //ajax-form
   $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      $('#form').trigger('reset');
    });
    return false;
  });

  // Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function() { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
  });

  $(document).mouseup(function (e) { // по клику вне попапа
      var popup = $('.popup');
      if (e.target!=popup[0]&&popup.has(e.target).length === 0){
          $('.js-overlay-thank-you').fadeOut();
      }
  });
});
