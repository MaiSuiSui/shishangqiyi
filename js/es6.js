
/**********************************登录页面的js*******************************/
;(function(){
	$(function(){
/****************登录注册滚动************/
		$("#regist_login a").eq(0).hide()
			.animate({'top':20, 'opacity': 'show'},1500)
			.animate({'left': 1203}, 5000).css({'background':'#000','color':'#fff'})
		    .animate({'top':68},200);
		$("#regist_login a").eq(1).hide()
			.animate({'top':20, 'opacity': 'show'},1000)
			.animate({'left': 1233}, 5000).css({'background':'#000','color':'#fff'})
		    .animate({'top':68},200);
/***************注册调接口*************/	
		$("#btn1").click(function(){
			var user1 = $("#txt1").val();
			var psw1 = $('#psw1').val();
			$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:'register',userID:user1,password:psw1},function(data){
				if(data == 0){
					alert("用户名重名请重新输入！");
				}
				if(data == 1){
					alert("注册成功！");
					window.location.href = "login.html";
				}
			})
		})
		
/****************登录调接口*******************/		
		$("#btn2").click(function(){
			var user2 = $("#txt2").val();
			var psw2 = $('#psw2').val();
			$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:user2,password:psw2},function(data){
				console.log(data);
				if(data == 0){
					alert("用户名不存在");
				}
				else if(data == 2){
					alert("账号密码错误");
				}
				else{
					$.cookie("username",data.userID,{expires:7,path:"/"});
					window.location.href = "../index.html";
				}
			})
		})
/**********************************首页的js*******************************/
		
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",function(data){
			var data = data;
			var str ="";
			for(var i=0;i<data.length;i++){
				if((i+1)%4==0&&i!=0){//创建tr
					str += "<td><img src='"+data[i].goodsListImg+"'><p>"+data[i].goodsName+"</p><p><span>"+data[i].price+"</span></p></td>" 
					var oTr=document.createElement("tr");
					//console.log($("#center-wrap #center-clothing")[0])
					oTr.innerHTML += str;
					
					$("#center-wrap #center-clothing")[0].appendChild(oTr);
					
					str = "";
				}else{
					str += "<td><img src='"+data[i].goodsListImg+"'><p>"+data[i].goodsName+"</p><p><span>"+data[i].price+"</span></p></td>"
					
				}
			}
		})
/****************调出分类*******************/		
		$.getJSON("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
			var str = "";
			$.each(data,function(index,item){
				str += `<li><a href="html/productlist.html?classID=${item.classID}">${item.className}</a></li>`;
			})
			$("#header")[0].innerHTML += str;
		})	
		
	})
})();
