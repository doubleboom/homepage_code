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
				<div v-for="menu_name in menu_names"><a href="#"><span>{{menu_name}}</span></a></div>
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
	
	export default{
		name: "header",
		data(){
			return {
				isShake:false,
				menu_names:['首页','课程介绍','教学模式','AI应用','关于我们','登录/注册']
			}	
		},
		methods: {
//			myfun: function(){
//				this.isShake = !this.isShake;
//			}
		}
	}
</script>

<style scoped lang="scss">
	#nav{
		background-color: #333F50;
		z-index: 999;
		width: 100%;
	}
	#nav_in{
		overflow: hidden;
		padding: 0.3em 0;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	#nav_in .logo{
		float: left;
		height: 56px;
		width: 200px;
	}
	#nav_in #logo_xs{
		float: left;
	}
	#menu_btn{
		margin-top: 10px;
		float: right;
		height: 1.4em;
	}
	#xsmenu{
		display: none;
		clear: left;
	}
	#xsmenu a{
		font-size:0.8em;
		line-height: 0em;
	}
	#nav_in ul{
		float: right;
		width: 75%;
		overflow: hidden;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	#nav_in li{
		float: left;
		width: 16%;
		text-align: center;
		overflow: hidden;
	}
	#nav_in a{
		float: left;
		display: inline-block;
		width: 100%;
		padding: 1em 0;
		overflow: hidden;
	}
	#nav_in li p{
		color: white;
		margin: 0;
		font-size: 1.4em;
		float: left;
		width: 100%;
		transition: all 0.3s;
	}
	#nav_in span{
		color: #CBCCCD;
		font-size: 0.9em;
		float: left;
		width: 100%;
		transition: all 0.3s;
	}
	#nav_in li:hover span,#nav_in li:hover p{
		color: #E9BD25;
	}
	#nav_in li.click span,#nav_in li.click p{
		color: #E9BD25;
	}
	#login{
		padding-left: 30px;
		margin-left: 20px;
	}
	#login a{
		width:  48%;
		line-height: 42px;
	}
	#xsmenu{
		display: none;
	}
	#logo_xs{
		padding-top: 3px;
		padding-bottom: 3px;
	}
	@media(max-width: 768px ) {
		#nav_in{
			display: inline;
		}
		#nav{
	
		}
		#logo_xs{
			margin-top: 6px;
			margin-bottom: 8px;
		}
	}
	@media(min-width:1921px) and (max-width: 2499px){
		#nav_in .logo{
			height: 70px;
			width: 250px;
		}
		#login a{
			font-size: 0.8em;
			line-height: 60px;
		}
	}
	@media(min-width: 2500px){
		#nav_in .logo{
			width: 380px;
			height: 100px;
		}
		#login a{
			line-height: 80px;
		}
	}
	@media(min-width: 769px ){
		#nav_in ul{
			margin-top: 3px;
		}
	}
</style>