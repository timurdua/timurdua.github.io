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
	var wscroll = $(this).scrollTop();
<<<<<<< HEAD
	// jumbotron
	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wscroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform' : 'translate( 0px,'+ wscroll/4 +'%)'
	});
	$('.jumbotron h4').css({
		'transform' : 'translate( 0px, '+ wscroll*1.5 +'%)'
	});
	$('.jumbotron a').css({
		'transform' : 'translate( 0px, '+ wscroll +'%)'
	});
	// video
	if(wscroll > $('.video').offset().top - 300) {
		$('.video .thumbnail').each(function()) {
			setTimeout(function() {

			}, 2000)
		}
		// $('.video .thumbnail').addClass('muncul');
	}




=======
	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wscroll/4 +'%)'
	});
$('.jumbotron p').css({
		'transform' : 'translate( 0px,'+ wscroll/8 +'%)'
	});
$('.jumbotron h4').css({
		'transform' : 'translate( 0px, '+ wscroll +'%)'
	});
$('.link a').css({
		'transform' : 'translate( 0px, '+ wscroll/2 +'%)'
	});
>>>>>>> eed06365c5a199e055293d65d50925a730115d84

});