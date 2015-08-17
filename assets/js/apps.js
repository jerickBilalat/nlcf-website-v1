$(function() {
	eventsBlt();
	ministriesBlt();
	ministriesLoad();
	mediaLightBox();
	closeButton();
});

function eventsBlt() {
	$('#month-selector').on('click', '.month-name', function() {
		$('.blt').css('left','-100%');
		$('.calendar-load').show();
	});
}

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
		console.log('the button was click');
		$('#media-lightbox').css('display', 'none');
		$('body').css('overflow', 'initial');
		$(this).css('display', 'none');
	});
}