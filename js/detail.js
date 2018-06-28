;(function(){
	$(function(){
		//
		console.log(location.search)
		var goodsid = location.search.split("=")[1];
		console.log(goodsid);
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{"username":$.cookie("username"),goodsID:goodsid},function(data){
			$(".left").html(`<img src="${data[0].goodsListImg}">`);
			$(".right #right-p").html(`${data[0].goodsName}`);
			$(".right #right-p-span")[0].innerHTML +=`${data[0].price}`;
/**************************************文本框值加减************************************************/			
			var num = $("#cart-num").val();
				$("#cart-span-there").click(function(){
					num++;
					$("#cart-num").val(num);
				})
				$("#cart-span-one").click(function(){
					if(num >= 1){
						num--;
						$("#cart-num").val(num);
					}
					
			})
/*****************************点击添加购物车，把数量传到购物车页面****************************************/				
/******************判断购物车里是否有此商品********************/	
//			
			$("#btn3").click(function(){
				$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					$.each(data, function(index,item) {
						if(item.goodsID == goodsid){
							var addNum = Number(item.number)+Number($("#cart-num").val());
//							console.log(addNum)
							$.getJSON("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid,number:addNum},function(data){
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功")
								}
							})
						}
						
							var addNum =Number($("#cart-num").val());
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid,number:addNum},function(data){
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功")
								}
							})
						
					});
				})
				
			})	

			
/*****************************点击查看购物车，跳转到购物车页面****************************************/			
			$("#btn4").click(function(){
				window.location.href = "cart.html";
			})
		})
		
	})
})()
