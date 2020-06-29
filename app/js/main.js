$(function(){
    $('.burger__burger').click(function(event){
        $('.burger__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });


  
});