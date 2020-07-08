$(function(){
    $('.burger__burger').click(function(event){
        $('.burger__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$(".header__menu,.order__container,.footer").on("click",".a-1", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	$(".portfolio__btn").click(function() {
		$('.portfolio__item').show();
		$('.portfolio__btn').hide();
	  });


  
});