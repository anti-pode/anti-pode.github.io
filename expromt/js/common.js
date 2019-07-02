$(function() {

  var el = $(".worktime");
  var container = $(".worktime-inner");

  el.click(function(e) {

    if($(e.target).is('.worktime')) {
      container.toggleClass("active");
    }
  });

  $(document).mouseup(function(e) {
    if(e.target!=container[0]&&!container.has(e.target).length) {
      container.removeClass("active");
    }
  });

  var teacher = $(".icon");
  var inner = $(".inner");
  var b = $(".b");

  teacher.click(function() {
    inner.toggleClass("active");
    b.toggleClass("rotate");
  });

  var map = $(".map");
  var address = $(".address");

  address.click(function(){
    map.toggleClass('active');
  });

  $(document).mouseup(function(e) {
    if(e.target!=map[0]&&!map.has(e.target).length) {
      map.removeClass("active");
    }
  });
 
























  $('.slick').slick({
    nextArrow: '<a href="#" class="slick-button slick-button-right"><img src="img/icons/r.png" alt=""></a>',
    prevArrow: '<a href="#" class="slick-button slick-button-left"><img src="img/icons/l.png" alt=""></a>',
  });

  $('.slick-vector').slick({
    nextArrow: '<a href="#" class="slick-button slick-button-right"><img src="img/icons/r.png" alt=""></a>',
    prevArrow: '<a href="#" class="slick-button slick-button-left"><img src="img/icons/l.png" alt=""></a>',
    slidesToShow: 2,
    slidesToScroll: 1
  });

  $('.slick-review').slick({
    nextArrow: '<a href="#" class="slick-button slick-button-right"><img src="img/icons/l-r.png" alt=""></a>',
    prevArrow: '<a href="#" class="slick-button slick-button-left"><img src="img/icons/l-g.png" alt=""></a>',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoWidth: true
  });
});
