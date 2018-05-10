/* Author:
	Philipp C. Adrian
*/
(function($, window, undefined) {
////////////////////////////////////////////////////////////////////////////////
bjs = {
////////////////////////////////////////////////////////////////////////////////
	init : function (){
		//$("html").removeClass("no-js");

		//bjs.activateReferenceItem(location.hash);
		$('pre.code').highlight({source:1, zebra:1, indent:'space', list:'ol'});

		//bjs.behaviour($("body"));
	},
////////////////////////////////////////////////////////////////////////////////
	behaviour: function (context) {
		$(".referenceLink", context).bind("click",function(e){
			e.preventDefault();
			bjs.activateReferenceItem($(this).attr("href"));
		});

		bjs.iScroll = new iScroll("iScroll", {
			hideScrollbar:false,
			hScroll:false
		});
	},
////////////////////////////////////////////////////////////////////////////////
	iScroll : false,
	activateReferenceItem : function(id) {
		var content = $(id);
		if(!content.length) return;
		window.location=id;
		$(".referenceLink").removeClass("active");
		$('[href="'+id+'"]').addClass("active");
		content.siblings().removeClass(".active").fadeOut(100,function(){
			content.addClass(".active").css({display:"none",opacity:1}).fadeIn(100);
		});
	}
}
////////////////////////////////////////////////////////////////////////////////
	$(document).ready(function() {
		bjs.init();
		$( "body > *" ).wrapAll( "<div class='wrapper'></div>" );
		specialChars();
		createGuideLines();

		$('.nav-o-meter').append('<ul class="bars"><li></li><li></li><li></li></ul>');
		// MOBILE NAVIGATION
		$('.nav-o-meter').on('click', function() {
			$(this).toggleClass('opened');
			$('	.main-menu').toggle();

			$('.main-menu').find('li a').bind('click', function(){
					if($('.nav-o-meter').hasClass('opened')) {
						$('.nav-o-meter').toggleClass('opened');
						$('	.main_menu').toggle();
					}
			});
		});
	});


	function specialChars() {
		$('.main-menu a').each( function() {
			var chars = $(this).text().split("");
			$this = $(this);
			$this.empty();
			$.each(chars, function (i, el) {
				var fontSize = 30-(2*i);
				var style = "style='border-bottom-width: " + (i+1) + "px; ";
				style += "font-size: "+fontSize+"px; ";
				style += "top: -" + (i+(2*i)) + "px;''";
			    $this.append("<span "+style+">" + el + "</span");
			 });
			// for(var i = 0; i < chars.length; i++) {
			// 	chars[i] = '<span>'+chars[i]+'</span>';
			// 	console.log(chars[i]);
			// }
		});
	}


	function createGuideLines() {
		$('.guidelines').append('<div class="bottom_lines">');
		for(var b=0; b<5; b++) {
			$('.bottom_lines').append('<div class="bottomLine line_'+(b+1)+'">');
		}
		$('.guidelines').append('<div class="right_lines">');
		for(var r=0; r<3; r++) {
			$('.right_lines').append('<div class="right_line line_'+(r+1)+'">');
		}
		$('.guidelines').append('<div class="page_lines">');
		for(var i=0; i<4; i++) {
				$('.page_lines').append('<div class="line line_'+(i+1)+'">');
			}
	}

////////////////////////////////////////////////////////////////////////////////
})(jQuery, window, undefined);
