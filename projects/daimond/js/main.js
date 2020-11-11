$(function(){
     ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.745009, 37.581238],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '',
                // Размеры метки.
                iconImageSize: [20, 20],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -20]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([55.743031, 37.577705], {
                hintContent: 'Daimond',
                balloonContent: 'А эта — новогодняя',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/poi.png',
                // Размеры метки.
                iconImageSize: [30, 35],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -30],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });

    $('.burger__burger').click(function(event){
        $('.burger__burger,.nav__items').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    
    $('.burger__burger-1').click(function(event){
        $('.burger__burger-1,.nav__items-1').toggleClass('active');
        
    });
  
});