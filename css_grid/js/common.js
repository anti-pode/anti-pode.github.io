$(function() {
	 $(".form-order").submit(function() {
      $.ajax({
        type: "POST",
        url: "../php/mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $(".form-order").trigger("reset");
      });
      return false;
    });
});