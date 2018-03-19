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
	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wscroll/2 +'%)'
	});
$('.jumbotron p').css({
		'transform' : 'translate( 0px,'+ wscroll/4 +'%)'
	});
$('.jumbotron h4').css({
		'transform' : 'translate( 0px, '+ wscroll/4 +'%)'
	});
});