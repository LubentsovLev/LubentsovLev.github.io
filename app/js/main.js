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


  
});