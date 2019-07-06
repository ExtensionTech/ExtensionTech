$(function() {
	$('#main').smoothState();
});
$(".navToggle").click (function(){
	$(this).toggleClass("open");
	$("nav").toggleClass("open");
});
$(".dropdown-nav").click (function(e){
	if ($(".dropdown-nav").hasClass('open')) {
		return true;
	} else {
		e.preventDefault();
	}
	$(".dropdown-nav").toggleClass("open");
	$("#dropdown-main").toggleClass("open");
	return false;
});
