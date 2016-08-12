$("#footer .foot-btn").each(function(index,elem){
	$("#footer .foot-btn:eq(0)").css("color","#FF4A52")
	$(this).bind("touchstart",function(){
		$("#footer .foot-btn").each(function(index1,elem1){
			$(elem1).css("color","#999")
		})
		$(this).css("color","#FF4A52")
	})
})