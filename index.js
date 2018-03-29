// event
$('.scroll').on('click', function(){
// ambil isi href
var tujuan = $(this).attr('href');
// tangkap element
var elementTujuan = $(tujuan);
$('html,body').animate({
	scrollTop: elementTujuan.offset().top - 50
}, 500, 'swing');
});

// parallax
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	// jumbotron
	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wScroll*1.5 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate( 0px,'+ wScroll/4 +'%)'
	});
	$('.jumbotron h4').css({
		'transform' : 'translate( 0px, '+ wScroll*1.5 +'%)'
	});
	$('.jumbotron a').css({
		'transform' : 'translate( 0px, '+ wScroll*2 +'%)'
	});
	// $('.jumbotron h1').css({
	// 	'opacity' : ' '+ 1 - (wScroll / 2000) +''
	// });
	$('.jumbotron p').css({
		'opacity' : ' '+ 1 - (wScroll / 400) +''
	});
	$('.jumbotron h4').css({
		'opacity' : ' '+ 1 - (wScroll / 400) +''
	});
	// $('.jumbotron a').css({
	// 	'opacity' : ' '+ 1 - (wScroll / 2000) +''
	// });
});
