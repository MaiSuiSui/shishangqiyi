;(function(){
	$(function(){
		//
		var goodsid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
			$(".left").html(`<img src="${data[0].goodsListImg}">`);
			$(".right #right-p").html(`${data[0].goodsName}`);
			$(".right #right-p-span")[0].innerHTML +=`${data[0].price}`;
			$("#btn3").click(function(){
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
								console.log(data);
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功");
									//$.cook("goodsNum",data.number,{expires:7,path:"/"});
									//$.cookie("username",data.userID,{expires:7,path:"/"});
								}
							})
			})
			$("#btn4").click(function(){
				window.location.href = "cart.html";
			})
		})
		
	})
})()
