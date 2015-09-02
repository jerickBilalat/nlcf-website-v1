$(function() {
	eventsBlt();
	ministriesBlt();
	ministriesLoad();
	mediaLoad();
	mediaLightBox();
	closeButton();
});

// Events apps
function eventsBlt() {
	$.ajaxSetup({ cache: true });
	$('#month-selector').on('click', '.month-name', function(event) {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/calendar/'+newFolder+'.html';
		event.preventDefault();
		$('.selected-month').removeClass('selected-month');
		$this.toggleClass('selected-month');
		$('.current-month').css('display', 'none');
		$('.calendar-load').css('display', 'block').load(newHTML);
	});
}

// Minitries  apps
function ministriesBlt() {
	$('figure, figcaption').on('click', '.view-more', function() {
		$('.blt').css('left','-100%');
		$('.ministry-gallery.column, figure:last-child').hide();
		$('.column-2').show();
	});
	$('.column-2').on('click', '.back', function() {
		$('.blt').css('left','0%');
		$('.ministry-gallery.column, figure:last-child').show();
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

// Media apps
function mediaLoad() {
	$.ajaxSetup({ cache: true });
	$('#sideInfo').on('click', '.series-selector', function() {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/media-pages/'+newFolder+'.html';
		$('#sermonLoad').html(spinner).load(newHTML);
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