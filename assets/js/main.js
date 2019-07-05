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
$('#dropdown-main').on('touchstart', function (e) {
    'use strict'; //satisfy code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass('hover');
        $('#dropdown-main').not(this).removeClass('hover');
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});
