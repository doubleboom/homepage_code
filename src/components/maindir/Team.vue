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
                    <li class="pro"><span>联合创始人<br>CEO</span></li>
					<li id="syfsay" class="say">知识就是力量</li>
                    <li class="team_">哈佛大学教育学硕士，哈</li>
                    <li class="team_">佛中国教育论坛联合主席,</li>
                    <li class="team_">1万多小时教育培训讲师</li>
                    <li class="team_">经验。帮助数百中国学生</li>
                    <li class="team_">功走进名校殿堂，如康奈</li>
					<li class="team_">尔大学，哥伦比亚大学，</li>
					<li class="team_">芝加哥大学等。</li>
                </ul>
            </div>
            <div id="xrj" class="team col-sm">
                <ul style="margin-bottom: 0px">
                    <li><img src="../../assets/images/xrj.png"></li>
                    <li class="name"><b>许人镜</b></li>
                    <li  class="pro"><span>联合创始人<br> 首席教育产品开发官</span></li>
					<li id="xrjsay" class="say">打破学不会</li>
                    <li class="team_">哈佛大学应用物理与计算</li>
                    <li class="team_">机博士，发表顶级期刊10</li>
                    <li class="team_">余篇，引用次数超过500</li>
                    <li class="team_">次。数百位中国青少年的</li>
					<li class="team_">AI启蒙导师。</li>
                </ul>
            </div>
			<div id="zh" class="team col-sm">
                <ul>
                    <li><img src="../../assets/images/zh.png"></li>
                    <li class="name"><b>张&nbsp;&nbsp;&nbsp;航</b></li>
                    <li class="pro"><span>联合创始人<br>首席AI教育科学家</span></li>
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

<style scoped lang="scss">
	.say{
		display: none;
	}
	#team_in{
    overflow: hidden;
    text-align: center;
	}
	.name b{
		font-size: 1.2em;
	}
	.name{
		margin: 0.5em 0;
	}
	.pro span{
		display: inline-block;
		width: 10em;
		background-color: white;
		border: 1px solid #A7DAD7;
		padding: 0.5em 0;
		font-size: 1.1em;
		border-radius: 1.4em;
		font-weight: bold;
	}
	.team{
		border-radius: 20px;
	}
	.say{
		font-size: 1.0em;
		text-shadow: 0.5px 0.5px 0.5px black;
	}
	#team_in .team ul{
		margin-top: 20px;
		padding-top: 20px;
	}
	.team .pro{
		margin-bottom: 20px;
	}
	.team_{
		font-size: 0.9em;
		margin: 0.3em 0;
		color: #727171;
	}
	#xrj{
		height: 560px;
	}
	@media(max-width: 1024px){
		#team_in .name b{
			font-size: 0.9em;
		}
		#team_in ul .team_{
			font-size: 0.7em;
		}
		#team_in ul{
			padding-left: 0px;
			margin-bottom: 30px;
			border-bottom: #E9E7E7 1px solid;
			padding-bottom: 20px;
		}
		#team_in .pro span{
			font-size: 0.7em;
		}
		#team_in .pro{
			margin-bottom: 8px;
		}
	}
	@media(min-width: 666px) and (max-width: 668px){
	
		.team_{
			width:  192px;
		}
		
		#team_in{
			.team{
				ul{
					border-bottom: 0px;
				}
			}
		}
	}
	@media(min-width:1721px) and (max-width: 1999px){
		#xrj{
		height: 630px;
		}
	}
	@media(min-width:2000px) and (max-width: 2499px){
		#xrj{
		height: 730px;
		}
	}
	@media(min-width: 2500px){
		#xrj,#zh,#syf{
			height: 1007px;
		}
	}
	@media(min-width: 769px ){
		.team{
			float: left;
			width: 31%;
			margin-right: 3.5%;
			background-color: #F4F4F4;
		}
		.team:last-child{
			margin-right: 0;
		}
		.team ul{
			padding: 0;
			margin: 0;
			list-style-type: none;
			margin-top: 4em;
			margin-bottom: 2em;
			font-size: 1.4em
		}
		.team img{
			width: 30%;
		}
	}
	@media(min-width:1023px) and (max-width:1025px){
		#team_in{
			div{
				height: 400px;
			}
		}
	}
</style>