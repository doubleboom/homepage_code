<template>
<div id="team">
    <div class="title">
        <span class="backgroundtext">TEAM</span>
        <div>
            <p>愚夫团队</p>
            <span>OUR TEAM</span>
        </div>
    </div>
    <div class="container">
        <div id="team_in" class="row">
            <div id="syf" class="team col-sm">
                <ul>
                    <li><img src="../../assets/images/syf.png"></li>
                    <li class="name"><b>施一帆</b></li>
                    <li class="pro"><span>首席执行官</span></li>
					<li id="syfsay" class="say">知识就是力量</li>
                    <li class="team_">哈佛大学教育学硕士,</li>
                    <li class="team_">哈佛中国教育论坛联</li>
                    <li class="team_">合主席,1万多小时教</li>
                    <li class="team_">育培训讲师经验。</li>
                    <li class="team_"></li>
                </ul>
            </div>
            <div id="xrj" class="team col-sm">
                <ul style="margin-bottom: 0px">
                    <li><img src="../../assets/images/xrj.png"></li>
                    <li class="name"><b>许人镜</b></li>
                    <li  class="pro"><span>首席产品开发</span></li>
					<li id="xrjsay" class="say">打破学不会</li>
                    <li class="team_">哈佛大学应用物理与计算</li>
                    <li class="team_">机博士，山东大学人工智</li>
                    <li class="team_">能研究中心特聘专家,发表</li>
                    <li class="team_">顶级期刊10余篇,引用次数</li>
                    <li class="team_">超过500次。</li>
                </ul>
            </div>
			<div id="zh" class="team col-sm">
                <ul>
                    <li><img src="../../assets/images/zh.png"></li>
                    <li class="name"><b>张&nbsp;&nbsp;&nbsp;航</b></li>
                    <li class="pro"><span>首席AI科学家</span></li>
					<li id="zhsay" class="say">科学的顶点是AI</li>
                    <li class="team_">康奈尔大学电子与计算</li>
                    <li class="team_">机工程博士,香港中文大</li>
                    <li class="team_">学计算机科学哲学博士,</li>
                    <li class="team_">ISPD'17,FCCM'18最佳</li>
                    <li class="team_">论文奖获得者。</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
$(function(){
	$("#zh").mouseover(function(){
		$("#zhsay").fadeIn();
		$("#zh").mouseleave(function(){$("#zhsay").fadeOut()});
	});
	$("#syf").mouseover(function(){
		$("#syfsay").fadeIn();
		$("#syf").mouseleave(function(){$("#syfsay").fadeOut()});
	});
	$("#xrj").mouseover(function(){
		$("#xrjsay").fadeIn();
		$("#xrj").mouseleave(function(){$("#xrjsay").fadeOut()});
	})
})
</script>

<style scoped>
	.say{
		display: none;
	}
</style>