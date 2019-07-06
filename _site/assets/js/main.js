$(function() {
	$('#main').smoothState();
});
$(".navToggle").click (function(){
	$(this).toggleClass("open");
	$("nav").toggleClass("open");
});
$(".dropdown-nav").click (function(){
	$(".dropdown-nav").toggleClass("open");
	$("#dropdown-main").toggleClass("open");
});
/*
$(".dropdown-nav").on('touchstart', function (e) {
	if ($(".dropdown-nav").hasClass('open')) {
		$(".dropdown-nav").toggleClass("open");
		$("#dropdown-main").toggleClass("open");
		return true;
	} else {
		e.preventDefault();
	}
	$(".dropdown-nav").toggleClass("open");
	$("#dropdown-main").toggleClass("open");
	return false;
});
*/
