$(document).ready(function () {

    $(".getFullSearch").on('click', function (e) {
        $('.search-full').addClass("active");
        e.preventDefault();
    });

    $('.search-close').on('click', function (e) {
        $('.search-full').removeClass("active");
        e.preventDefault();
    });

});

// Owl Carousel 
$(document).ready(function() {
	$('#winit-slider-1').owlCarousel({
		items: 3,
		stagePadding: 100,
		navigation: true,
		pagination: false,
		rewindNav: false,
	});
});

// Electronics Owl Carousel 
$(document).ready(function() {
	$('#winit-slider-2').owlCarousel({
		items: 3,
		stagePadding: 100,
		navigation: true,
		pagination: true,
		rewindNav: false,
	});
});
$(document).ready(function() {
	$('#winit-slider-2').owlCarousel({
		navigation: true,
		pagination: false,
		rewindNav: false
	});
});
$(document).ready(function() {
	var owl = $('#other-winits');
	owl.owlCarousel({
		pagination: false,
		rewindNav: false
	});
	$('#nextWinit').click(function() {
		owl.trigger('owl.next');
	});
	$('#prevWinit').click(function() {
		owl.trigger('owl.prev');
	})
});

// Parallax 
// function winitParallax() {
// 	var scrolled = $(window).scrollTop() + 1;
// 	$('.parallax-1').css('background-position', '0' + -(scrolled * 0.1) + 'px');
// }

// $(window).scroll(function(e) {
// 	winitParallax();
// });

// Modals
// $(window).load(function() {
// 	$('#modal-startup').modal('show');
// });