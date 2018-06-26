;(function($){
	$(function(){
		var oImg = document.createElement("img");
		var oP = document.getElementsByTagName("p");
		var oSpan = document.getElementsByTagName("span");
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",function(data){
			console.log(data);
			//遍历product-wrap的table
			for(var i = 0;i<$("#product-wrap table")[0].length;i++){
			//遍历product-wrap的table里的tr	
				for(var j=0;j<$("#product-wrap table tr")[0].length;j++){
					for(var z=0;z<$("#product-wrap table tr td")[0].length;z++){
						for(var x=0;x<data.length;x++){
							console.log(data[x].3)
							$("td").eq(z).find("img").attr({src:data[x].3});
							/*$(this).$("p").text(data[x]);
							$(this).$("span").text(data[x]);
							console.log($(this));*/
						}
					}
				}
			}
			
		})
	})
})(jQuery);


