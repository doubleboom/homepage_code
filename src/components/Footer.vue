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
						<span id="email">info@yufu-ai.com</span>
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
</style>
