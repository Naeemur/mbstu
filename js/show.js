$(document).ready(function(){
	$('.gallery a[href$=".jpg"], .gallery a[href$=".png"], figure a').colorbox({ rel: 'gallery', maxWidth: "85%", maxHeight: "85%", current: false, opacity: .8 });
});