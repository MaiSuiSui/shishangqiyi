;(function($){
	$(function(){
		var classid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
			var data = data;
			var str ="";
			for(var i=0;i<data.length;i++){
				if((i+1)%4==0&&i!=0){//创建tr
					str += "<td><a href='detail.html?id="+data[i].goodsID+"'><img src='"+data[i].goodsListImg+"'><p>"+data[i].goodsName+"</p><p><span>"+data[i].price+"</span></p></a></td>"; 
					var oTr=document.createElement("tr");
					oTr.innerHTML += str;
					$("#product-wrap table")[0].appendChild(oTr);
					str = "";
				}else{
					str += "<td><a href='detail.html?id="+data[i].goodsID+"'><img src='"+data[i].goodsListImg+"'><p>"+data[i].goodsName+"</p><p><span>"+data[i].price+"</span></p></a></td>";
				}
			}
		})
		
	})
})(jQuery);