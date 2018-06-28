;(function(){
	$(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str = "";
					$.each(data,function(index,item){
						
						str += `<div class='good'>
						<div id="cart-left">
								<a href="detail.html?id=${item.goodsID}">
									<img src="${item.goodsListImg}"/>
								</a>
							</div>
							<div id="cart-right">
								<p>${item.goodsName}</p>
								<span>￥${item.price}</span>
								<label for="num1">数量：</label>
								<input type="number" id="num1" value="${item.number}" />
								<input type="button" data-del="${item.goodsID}" class="btn5" value="删除"/>
							</div>
						</div>`;
					})
					$("#cart-content").html(str);
					$("#num1").click(function(){
						$(this).css({"background":"red"});
					})
					$(".btn5").click(function(){
						$(this).parent().parent()[0].remove();
						console.log($(this).attr("data-del"))
						$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:$(this).attr("data-del"),number:0},function(data){
							console.log(11)
						})
					})
					
			})
		
	})						
})()