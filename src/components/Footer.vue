<template>
<div id="bottom">
    <div class="container">
        <div id="bottom_in">
            <div id="bottom_left" class="d-none d-lg-block">
                <div id="float">
                    <div class="bottom_">
                        <b>关于我们</b>
                        <ul>
                            <li><a href="###">公司简介</a></li>
                            <li><a href="###">教师版</a></li>
							<li><a href="###">新闻资讯</a></li>
							<li><a href="###">招标公告</a></li>
							<li><a href="###">校园招聘</a></li>
                        </ul>
                    </div>
                    <div class="bottom_">
                        <b>联系我们</b>
                        <ul>
							<li><a href="###">联系我们</a></li>
                            <li><a href="###">课程咨询</a></li>
                            <li><a href="###">合作方式</a></li>
							<li><a href="###">媒体合作</a></li>
                        </ul>
                    </div>
                    <div class="bottom_">
                        <b>其他服务</b>
                        <ul>
                            <li><a href="###">更多工具</a></li>
                            <li><a href="###">电脑设备检测</a></li>
                        </ul>
                    </div>
                    <div class="bottom_">
                        <b>服务协议</b>
                        <ul>
                            <li><a href="###">用户协议</a></li>
                            <li><a href="###">免责声明</a></li>
                        </ul>
                    </div>
					 <div class="bottom_">
                        <b>友情链接</b>
                        <ul>
                            <li><a href="###">百度</a></li>
                            <li><a href="###">谷歌</a></li>
                        </ul>
                    </div>
                </div>
                <img src="https://icon.cnzz.com/img/pic.gif">
            </div>
            <div id="bottom_right">
                <div id="phone">
					<a id="abtus_xs" href="" class="d-block d-lg-none"><b>关于我们</b></a>
                    <img id="phonepng" src="../assets/images/phone.png">
                    <p>
                        <b id="number">0755-26600390</b>
						<span id="email">info@yufuedu.com</span>
                        <span>每天9:00-18:00 (仅市话费)</span>
                    </p>
                </div>
                <div id="go_">
					<a href=""></a>
					<div id="vx" >
						<img src="../assets/images/vx.jpg"></img>
					</div>
                    <a href="#wei"><img id="wei" src="../assets/images/wei.png"></a>
                    <a href="https://weibo.com/yufuzhixue"><img src="../assets/images/wb.png"></a>
					<a href=""></a>
					
                </div>
            </div>
        </div>
    </div>
	<div id="vx_xs" >
		<img src="../assets/images/vx.jpg"></img>
	</div>
</div>
</template>

<script>
$(function(){
	if(document.body.clientWidth > 666 && document.body.clientWidth < 1024){
		console.log("heng");
		$("#number").css({"padding-left":"60px"});
		$(".title_text").css({"padding-left":"10px"});
		if(document.body.clientWidth > 767){
			console.log("pad");
			$("#number").css({"padding-left":"90px"});
		}
	}
	
	if(document.body.clientWidth <1024){
	   
			$("#wei").click(function(){
				$("#vx_xs").fadeToggle();
			});
	   
	   }else{
		   $("#wei").click(function(){
			   $("#vx img").fadeToggle();
		   })
	   }
})
</script>

<style scoped>
	li a{
		color: #CBCACA;
	}
	
	li a:hover{
		color: #E9BD25;
	}
	#email{
		font-size: 1.4em;
	}
	#vx_xs{
		width:100%;
		height: 300px;
		display: none;
	}
	#vx{
		display: flex;
		justify-content:center;
	}
	#vx img{
		border-radius: 20px;
		width: 150px;
		height: 150px;
		margin-bottom: 10px;
		margin-right: 80px;
		display: none;
	}
	#bottom{
    background-color: #323232;
	position: relative;
	}
	#bottom_in{
		overflow: hidden;
		padding: 5% 0;
	}
	#bottom_left{
		float: left;
		width:60%;
	}
	#bottom_right{
		float: left;
		width: 40%;
	}
	#float{
		border-bottom: 1px solid #3E3E3E;
		overflow: hidden;
		padding-bottom: 1em;
		margin-bottom: 1em;
	}
	.bottom_{
		float: left;
		width: 20%;
	}
	.bottom_ b{
    display: inline-block;
    width: 100%;
    font-weight: normal;
    color: white;
    margin-bottom: 0.7em;
    cursor: default;
	font-size: 1.5em;
	}
	.bottom_ ul{
		margin: 0;
		color: #A2A2A2;
		font-size: 0.7em;
		padding-left: 1.4em;
	}
	.bottom_ ul *{
		font-size: 1.3em;
	}
	.bottom_ li{
		margin: 0.7em 0;
	}
	#bottom_right{
		text-align: center;
		color: white;
	}
	#go{
		position: relative;
	}
	#go_ a{
		display: inline-block;
		overflow: hidden;
		margin-right: 5%;
	}
	#go_ a img{
		float: left;
	}
	#go_ a:last-child{
		margin-right: 0;
	}
	#phone img{
		width: 9%;
		position: relative;
		top: -2em;
		left: 0.5em;
	}
	#phone p{
		display: inline-block;
		width: 50%;
		text-align: left;
		margin-left: 1%;
	}
	#phone span{
		display: inline-block;
		width: 100%;
		font-size: 0.7em;
		color: #A2A2A2;
	}
	#phone b{
		font-size: 2em;
		font-weight: normal;
	}
	@media(min-width: 2200px){
		#vx{
			display: flex;
			justify-content:center;
		}
		#vx img{
			border-radius: 20px;
			width: 300px;
			height: 300px;
			margin-bottom: 10px;
			margin-right: 360px;
			display: none;
		}
	}
	@media(max-width: 1024px){
		#phone *{
			font-size: 10px;
			text-align: center;
		}
		#go_{
			width: 400px;
		}
		#phone{
			width: 400px;
			height: 80px;
		}
		#bottom{
			min-width: 100%;
			margin-bottom: 0px;
		}
		#bottom *{
			text-align: center;
		}
		#bottom_right{
			width: 100%;
		}
		#phone{
			width: 100%;
		}
		#phone b{

		}
		#go_{
			width: 100%;
		}
		#vx{
			visibility: hidden;
		}
		#go_{
			margin-top: 30px;
		}
		#phone p span{
			text-align: left;
		}
	}
	@media(min-width: 666px) and (max-width: 668px){
		#phone p span{
			padding-left: 65px;
		}
	}
	@media(min-width: 2500px){
		#go_ a{
			width: 12%;
		}
		#go_ a img{
			width: 90px;
		}
	}
</style>
