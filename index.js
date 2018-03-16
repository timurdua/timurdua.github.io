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