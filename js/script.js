$(document).ready(function(){
	$('.slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  speed: 350,
	  adaptiveHeight: false,
	  autoplay: true,
  	  autoplaySpeed: 3000,
	  arrows: false,
      responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});
	$(".slider-nav a").click(function(e){
        e.preventDefault();
        slideIndex = $(this).index();
        $( '.slider' ).slick('slickGoTo', slideIndex, true);
    });
});