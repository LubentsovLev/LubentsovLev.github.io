$(function () {
	fixedHeader();
	chooseCityEvents();
	toggleSortEvents();
	priceRange();
	datepicker();
	timepicker();
	timeRange();
	sliders();
	productEvents();
	cartEvents();
	customPopups();
	customUpload();
	personalAccountEvents();
	rate();
	mobileEvents();
});

function fixedHeader(){

		if($(".js-header").length && $(window).width() > 992){
			var headerHeight = $(".js-header").height();

			$(window).scroll(function(){
				fixedHeaderScroll();
			});

			fixedHeaderScroll();

			function fixedHeaderScroll(){
				if($(this).scrollTop()>= headerHeight){
					$("body").addClass("_fixed-header");
					$(".q-wrapper").css("padding-top", headerHeight);
					$(".js-q-choose-city").insertAfter($(".js-header-logo"));
				} else {
					$("body").removeClass("_fixed-header");
					$(".q-wrapper").css("padding-top", 0);
					$(".js-q-choose-city").prependTo($(".q-header__top .q-inner"));
				}
			}
		}

}

function chooseCityEvents() {
	var chooseCityDropdown = $(".js-q-choose-city-dropdown");

	$(".js-q-choose-city-button").click(function () {
		chooseCityDropdown.toggleClass("_opened");
	});

	$(".js-q-choose-city-item").click(function () {
		console.log($(this).attr("data-city-name"))
		$(".js-q-choose-city-current-value").text($(this).attr("data-city-name"));
		$(".js-q-choose-city-item").removeClass("_active");
		$(this).addClass("_active");
		chooseCityDropdown.removeClass("_opened");
	});

	$(document).click(function(event) {
		$target = $(event.target);
		if(!$target.closest(".js-q-choose-city").length) {
			$(".js-q-choose-city-dropdown").removeClass("_opened");
		}
	});
}

function toggleSortEvents() {
	$(".js-q-sort-item").click(function () {
		if ($(this).hasClass("_active")) {
			$(this).toggleClass("_active");
		} else {
			$(this).closest(".js-q-sort-list").find(".js-q-sort-item").removeClass("_active");
			$(this).addClass("_active");
		}
		$(this).closest(".js-q-sort").removeClass("_opened");
	});

	$(".js-q-sort-label").click(function () {
		if ($(this).closest(".js-q-sort").hasClass("_opened")) {
			$(this).closest(".js-q-sort").removeClass("_opened");
		} else {
			$(".js-q-sort").removeClass("_opened");
			$(this).closest(".js-q-sort").addClass("_opened");
		}
	});

	$(document).click(function(event) {
		$target = $(event.target);
		if(!$target.closest(".js-q-sort").length) {
			$(".js-q-sort").removeClass("_opened");
		}
	});
}

function priceRange() {
	var minPriceInput = $(".js-min-price-range"),
		maxPriceInput = $(".js-max-price-range"),
		minPrice = Number(minPriceInput.attr("data-min-price")),
		minDefaultPrice = Number(minPriceInput.attr("data-min-default-price")),
		maxPrice = Number(maxPriceInput.attr("data-max-price")),
		maxDefaultPrice = Number(maxPriceInput.attr("data-max-default-price"));
	minPriceInput.val(minDefaultPrice);
	maxPriceInput.val(maxDefaultPrice);
	$(".js-price-range").slider({
		min: minPrice,
		max: maxPrice,
		values: [minDefaultPrice, maxDefaultPrice],
		range: true,
		stop: function stop(event, ui) {
			minPriceInput.val($(".js-price-range").slider("values", 0));
			maxPriceInput.val($(".js-price-range").slider("values", 1));
		},
		slide: function slide(event, ui) {
			minPriceInput.val($(".js-price-range").slider("values", 0));
			maxPriceInput.val($(".js-price-range").slider("values", 1));
		}
	});
	minPriceInput.change(function () {
		var value1 = minPriceInput.val();
		var value2 = maxPriceInput.val();

		if (parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			minPriceInput.val(value1);
		}

		$(".js-price-range").slider("values", 0, value1);
	});
	maxPriceInput.change(function () {
		var value1 = minPriceInput.val();
		var value2 = maxPriceInput.val();

		if (value2 > maxPrice) {
			value2 = maxPrice;
			maxPriceInput.val(maxPrice);
		}

		if (parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			maxPriceInput.val(value2);
		}

		$(".js-price-range").slider("values", 1, value2);
	});
	$(".js-min-price-range, .js-max-price-range, .js-only-numbers").keypress(function (event) {
		var key, keyChar;
		if (!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;else if (event.which) key = event.which;
		if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
		keyChar = String.fromCharCode(key);
		if (!/\d/.test(keyChar)) return false;
	});
}

function datepicker(){
	var dateToday = new Date();

	$(".js-q-datepicker").datepicker({
		dateFormat : "dd.mm.yy",
		monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		minDate: dateToday
	});
}

function timepicker(){
	$(".js-q-timepicker").timepicker({
		'timeFormat': 'H:i',
		'step': 60
	});
}

function timeRange() {
	$(".js-q-time-range").slider({
		min: 0,
		max: 24,
		values: [3, 9],
		range: true,
		stop: function slide(event, ui) {
			$(".js-q-time-range-input").val('{"from": ' + $(this).slider("values", 0) + ', "to": ' + $(this).slider("values", 1) + '}');
		}
	});
}

function sliders(){
	var bonusSlider = $(".js-q-bonus-slider");

	bonusSlider.slick({
		infinite: true,
		slidesToShow: 4,
		speed: 800,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: "<span class=\"slick-arrow slick-prev\"></span>",
		nextArrow: "<span class=\"slick-arrow slick-next\"></span>",
		responsive: [
			{
				breakpoint: 1161,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	var reviewsSlider = $(".js-q-reviews-slider");

	reviewsSlider.slick({
		infinite: true,
		slidesToShow: 4,
		speed: 800,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: "<span class=\"slick-arrow slick-prev\"></span>",
		nextArrow: "<span class=\"slick-arrow slick-next\"></span>",
		responsive: [
			{
				breakpoint: 1161,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	var recommendSlider = $(".js-q-recommend-slider");

	recommendSlider.slick({
		infinite: true,
		slidesToShow: 4,
		speed: 800,
		dots: false,
		arrows: true,
		adaptiveHeight: true,
		prevArrow: "<span class=\"slick-arrow slick-prev\"></span>",
		nextArrow: "<span class=\"slick-arrow slick-next\"></span>",
		responsive: [
			{
				breakpoint: 1161,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
}

function productEvents(){
	$(".js-q-product-flower").click(function () {
		if ($(this).hasClass("_active-item")) {
			$(this).toggleClass("_active-item");
		} else {
			$(this).closest(".js-q-product-flowers").find(".js-q-product-flower").removeClass("_active-item");
			$(this).addClass("_active-item");
		}
	});
	$(".js-toggle-item-title").click(function () {
		$(this).closest(".js-toggle-item").toggleClass("_opened");
	});
	$(document).click(function(event) {
		$target = $(event.target);
		if(!$target.closest(".js-q-product-flower").length) {
			$(".js-q-product-flower").removeClass("_active-item");
		}
	});
}

function cartEvents() {
	$(".js-cart-counter-minus").click(function(e){
		e.preventDefault();

		if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
	});
	$(".js-cart-counter-plus").click(function(e){
		e.preventDefault();

		$(this).prev().val(+$(this).prev().val() + 1);
	});

	var deliveryTimeInput = $(".js-q-cart-delivery-time"),
		deliveryTimeSlider = $(".js-q-time-range");

	$(".js-q-cart-delivery-checkbox").on("change", function(){

		if($(this).is(":checked")) {
			deliveryTimeInput.attr("disabled", false);
			deliveryTimeSlider.slider({ disabled: true });
		} else {
			deliveryTimeInput.attr("disabled", true);
			deliveryTimeInput.val("");
			deliveryTimeSlider.slider({ disabled: false });
		}
	})
}

function customPopups(){

	$(".js-show-q-recall-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-recall-popup").addClass("_opened-popup");
	});

	$(".js-show-q-add-review-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-add-review-popup").addClass("_opened-popup");
	});

	$(".js-show-q-thanks-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-thanks-popup").addClass("_opened-popup");
	});

	$(".js-show-q-login-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-login-popup").addClass("_opened-popup");
	});
	$(".js-show-q-logout-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-logout-popup").addClass("_opened-popup");
	});
	$(".js-show-q-change-password-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-change-password-popup").addClass("_opened-popup");
	});
	$(".js-show-q-change-name-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-change-name-popup").addClass("_opened-popup");
	});
	$(".js-show-q-change-phone-popup").click(function (e) {
		$("html").addClass("_opened-popup");
		$(".js-q-change-phone-popup").addClass("_opened-popup");
	});


	$(".q-popup").click(function (e) {
		if (!$(this).find(".js-q-popup-holder").is(e.target) && $(this).has(e.target).length === 0) {
			$("html").removeClass("_opened-popup");
			$(this).removeClass("_opened-popup");
		}
	});

	$(".js-close-popup").click(function (e) {
		e.preventDefault();
		$("html").removeClass("_opened-popup");
		$(this).closest(".q-popup").removeClass("_opened-popup");
	});

}

function customUpload(){
	$(".js-upload-button").change(function(){
		$(this).simpleUpload("/ajax/upload.php", {
			start: function(file){
				console.log("upload started");
				$(".js-upload-button").attr("disabled", "disabled")
				$(".js-upload-button-text").html("Загрузка файла ...");
				$(".js-upload-button-container").addClass("_uploading")
			},
			success: function(data){
				console.log("upload successful!");
				console.log(data);
			},
			error: function(error){
				console.log("upload error: " + error.name + ": " + error.message);
			}
		});
	});
}

function personalAccountEvents(){
	$(".js-show-tickets-form").click(function () {
		$(".js-tickets-container").addClass("_opened-ticket-form");
	});
}

function rate(){
	$(".js-rate-item").click(function () {
		$(this).closest(".js-rate").find(".js-rate-item").removeClass("_active");
		$(this).addClass("_active");
		$(this).prevAll().addClass("_active");

		$(".js-rate-input").val($(this).attr("data-val"));
	});
}

function mobileEvents(){
	$(".js-toggle-mobile-menu").click(function () {
		$("body").toggleClass("_opened-menu");
	});

	$(document).click(function(event) {
		$target = $(event.target);
		if(!$target.closest(".q-header__bottom--bottom-row").length && !$target.hasClass("js-toggle-mobile-menu")) {
			$("body").removeClass("_opened-menu");
		}
	});

	if($(".js-header").length && $(window).width() < 992){
		var productImgCol = $(".js-q-product-img-col"),
			productInfoCol = $(".js-q-product-info-col"),
			productBonuses = $(".js-q-product-bonuses"),
			productwidgets = $(".js-q-product-widgets");

		$(window).resize(function(){
			productWidgetsPosition();
			productBonusesPosition();
		});

		productWidgetsPosition();
		productBonusesPosition();

		function productBonusesPosition(){
			if(productBonuses.length && $(window).width() < 992 && $(window).width() > 767){
				productBonuses.appendTo(productImgCol);
			} else {
				productBonuses.appendTo(productInfoCol);
			}
		}

		function productWidgetsPosition(){
			if(productwidgets.length && $(window).width() < 767){
				productwidgets.appendTo(productInfoCol);
			} else {
				productwidgets.appendTo(productImgCol);
			}
		}
	}
}