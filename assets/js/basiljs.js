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
	});
////////////////////////////////////////////////////////////////////////////////
})(jQuery, window, undefined);