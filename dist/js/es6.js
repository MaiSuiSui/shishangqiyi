
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
					window.location.href = "../index.html";
				}
			})
		})
	})
})();
