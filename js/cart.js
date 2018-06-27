;(function(){
	$(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str = "";
					$.each(data,function(index,item){
						
						str += `<div id="cart-left">
								<img src="${item.goodsListImg}"/>
							</div>
							<div id="cart-right">
								<p>${item.goodsName}</p>
								<span>￥${item.price}</span>
								<label for="num1">数量：</label>
								<input type="number" id="num1" value="${item.number}" />
							</div>`;	
					})
					$("#cart-content").html(str);
					$("#num1").click(function(){
						$(this).css({"background":"red"});
					})
			})
	})						
})()