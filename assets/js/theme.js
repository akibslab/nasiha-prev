/*
 Theme Name: 
 Theme URI: 
 Author: 
 Author URI: 
 Description: 
 Version: 1.0
 License:
 License URI: 
*/

/*==================================
    [Table of contents]
===================================
    01. Testimonial Silder
    02. Strech Column
    03. Preloader
    04. Parallax Js
    04. Back To Top
*/

(function ($) {
	"use strict";

	/*--- 01. Testimonial Silder ---*/
	//$('.demoThumb img').css("transition", "transform " + 0.004 * $('.demoThumb img').height() + "s ease");
	/*--- 02. Sticky Header ---*/
	if ($(".isSticky").length > 0) {
		var header_height = $(".isSticky").height();
		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 300) {
				$(".blanks").css("height", header_height);
				$(".isSticky").addClass("fixedHeader animated slideInDown");
			} else {
				$(".blanks").css("height", "0");
				$(".isSticky").removeClass("fixedHeader animated slideInDown");
			}
		});
	}
	/*--------------------------------------------------------
    /  03. Preloader
    /---------------------------------------------------------*/
	$(window).on("load", function () {
		$(".preloader").delay(500).fadeOut("slow");

		// Active WOW JS
		new WOW().init();
	});
	if ($(".preloader").length > 0) {
		$(".closeLoader").each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();
				$(".preloader").delay(500).fadeOut("slow");
			});
		});
	}
	/*--------------------------------------------------------
    /   04. Parallax Js
    /--------------------------------------------------------*/
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	}

	/*--------------------------------------------------------
    /   05. Back To Top
    /--------------------------------------------------------*/
	function backtotop() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$("#backtotop").addClass("activate");
			} else {
				$("#backtotop").removeClass("activate");
			}
		});
		$("#backtotop").on("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
	}
	backtotop();
})(jQuery);
