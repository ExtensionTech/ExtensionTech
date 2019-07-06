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
	$(".arrow").toggleClass("open");
});
