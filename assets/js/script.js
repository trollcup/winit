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




// js added by Brandon

// Owl Carousel for the modal window
    $(document).ready(function() {
     
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");
     
      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: true,
        pagination:false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
        navigationText: ["<",">"],
      });
     
      sync2.owlCarousel({
        items : 5,
        itemsDesktop      : [1199,5],
        itemsDesktopSmall     : [979,5],
        itemsTablet       : [768,5],
        itemsMobile       : [479,5],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });
     
      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }
      }
     
      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });
     
      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }
     
        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
        
      }
     
    });
// /Owl Carousel

// test data-bind for modal window
$('#myModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var title = button.data('title') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('h1.modal-title').text(title)
})