
$(document).ready(function($) {
	eventsBlt();
	ministriesBlt();
	ministriesLoad();
	mediaLoad();
	mediaLightBox();
	sermonBlt();
	closeButton();
	$('#mobileNav').slicknav();
	$('.slick-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	initMap();
});



// Event page functions
function eventsBlt() {
	$.ajaxSetup({ cache: true });
	$('#month-selector').on('click', '.month-name', function(event) {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			calendarLoad = '../pages/calendar/'+newFolder+'.html',
			monthEventsLoad = '../pages/calendar-events/'+newFolder+'.html';			
		event.preventDefault();
		$('.selected-month').removeClass('selected-month');
		$this.toggleClass('selected-month');
		$('.current-month').css('display', 'none');
		$('.month-events-load').load(monthEventsLoad);
		$('.calendar-load').css('display', 'block').load(calendarLoad);
	});
}

// Minitries  functions
function ministriesBlt() {
	$.ajaxSetup({ cache: true });
	$('figure, figcaption').on('click', '.view-more', function() {
		var $this = $(this),
			newHTML = $this.data('folder');
		$('.full-title').html('<h2>'+newHTML+'</h2>');
		// $('.blt').css('left','-100%');
		$('.column-1').animate({width: 0}, 500);
		$('html, body').animate({
			scrollTop: $('.main-header').offset().top
		}, 1000);
		$('.column-2').show();
	});
	$('.column-2').on('click', '.back', function() {
		$('.column-1').animate({width: "50%"}, 500);
		$('.full-title').html('<h2>Ministry</h2>');
		$('.blt').css('left','0%');
		$('.ministry-gallery-column figure:last-child').show();
	});
}

function ministriesLoad() {
	$.ajaxSetup({ cache: true });
	$('figure, figcaption').on('click', '.view-more', function() {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/ministries-pages/'+newFolder+'.html';
		$('.column-2').html(spinner).load(newHTML);
	});
}

// Media functions
function mediaLoad() {
	$.ajaxSetup({ cache: true });
	$('.sermon-buttons-cont').on('click', '.series-selector', function() {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/media-pages/'+newFolder+'.html';
		$('#sermonLoad').html(spinner).load(newHTML);
	});
}

function sermonBlt() {
	$.ajaxSetup({ cache: true });
	$('.sermon-buttons-cont').on('click', '.next-button', function() {
		$('.sermons-blt').css('left', '-100%');
		$('.prev-button').addClass('active');
		console.log('test');
	});
	$('.sermon-buttons-cont').on('click', '.active', function() {
		$('.sermons-blt').css('left', '0%');
		console.log('test');
	});
}

function mediaLightBox() {
	$.ajaxSetup({ cache: true });
	$('#media-photos').on('click', 'p', function() {
		var $this = $(this), 
			newFolder = $this.data('folder'),
			newHTML = '../pages/media-pages/'+newFolder+'.html';
		$('#media-lightbox').css('display', 'initial').load(newHTML);
		$('#closeButton').css('display', 'initial');
	});
}

function closeButton() {
	$('#closeButton').on('click', function() {
		$('#media-lightbox').css('display', 'none');
		$('body').css('overflow', 'initial');
		$(this).css('display', 'none');
	});
}

function initMap() {
  var myLatLng = {lat: 45.039746, lng: -93.180781};

  var map = new google.maps.Map(document.getElementById('contactMap'), {
    zoom: 16,
    center: myLatLng,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

