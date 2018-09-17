<template>
<div id="nav" role="navigation">
	<div class="container">
        <div id="nav_in">
            <img id="logo_xs" style="height:40px;width: 120px;" class="d-block d-lg-none" src="../assets/images/logo.png">
			<img class="logo d-none d-lg-block" src="../assets/images/logo.png">
            <ul class="d-none d-lg-block">
                <li class="click">
                    <a href="/">
                        <p>首页</p>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>课程介绍</p>
                        <span>Introduction</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>教学模式</p>
                        <span>Teaching</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>AI&nbsp;应用</p>
                        <span>AI Application</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>关于我们</p>
                        <span>About US</span>
                    </a>
                </li>
				<li id="login" class="click">
					<a href="#"><p>登录</p></a><a href="#"><p> 注册</p></a>
				</li>
            </ul>
			<img id="menu_btn" class="d-block d-lg-none" src="../assets/images/button.png">
			<menu id="xsmenu">
				<div><a href="#"><span>首页</span></a></div>
				<div><a href="#"><span>课程介绍</span></a></div>
				<div><a href="#"><span>教学模式</span></a></div>
				<div><a href="#"><span>AI&nbsp;应用</span></a></div>
				<div><a href="#"><span>关于我们</span></a></div>
				<div><a href="#"><span>登录注册</span></a></div>
			</menu>
        </div>
    </div>
</div>
</template>

<script>
	$(function(){
		$("#menu_btn").click(function(){
			$("#xsmenu").slideToggle();
		});
		
		if(document.body.clientWidth <= 768){
		$("#nav").css({"position":"fixed"});
	}
		
		$("ul li a,#xsmenu a,#login a").click(function(){
			alert("敬请期待！");
		})
	})
</script>

<style scoped>
	#xsmenu{
		display: none;
	}
</style>