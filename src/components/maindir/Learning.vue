<template>
<div id="learning" class="container">
    <div class="title">
        <span class="backgroundtext">LEARNING</span>
        <div>
            <p>深度学习之卷积神经网络</p>
            <span>In-depth Learning</span>
        </div>
    </div>
    <div id="learning_out">
        <div class="container">
            <div id="learning_in" class="row">
                <div class="learning col-lg">
                    <ul>
                        <li class="learning_title">
                            <img src="../../assets/images/learning1.png">
                            <div class="title_text"><b>基础原理</b></div>
                        </li>
                        <!--<li class="learning_list"><a>通过愚夫智学针对中国孩子开的沉</a></li>
                        <li class="learning_list"><a>浸式AI教学模式可以让孩子充分学</a></li>
                        <li class="learning_list"><a>习AI的基础原理。将抽象复杂的AI</a></li>
                        <li class="learning_list"><a>基础教育变成每一个孩子都能了解</a></li>
                        <li class="learning_list"><a>掌握的基础知识。</a></li>-->
						<p class="learning_list">通过愚夫智学针对中国孩子开发的沉浸式AI教学模式可以让孩子充分学习AI的基础原理。将抽象复杂的AI基础教育变成每一个孩子都能了解掌握的基础知识。</p>
                    </ul>
                </div>
                <div class="learning col-lg">
                    <ul>
                        <li class="learning_title">
                            <img src="../../assets/images/learning2.png">
                            <div id="ai" class="title_text"><b>AI应用&nbsp;</b></div>
                        </li>
                        <!--<li class="learning_list"><a>愚夫智学主打无编程的AI应用制作</a></li>
                        <li class="learning_list"><a>模式，让每一个孩子都能成为独立</a></li>
                        <li class="learning_list"><a>的AI应用制作者，将孩子无穷的想</a></li>
                        <li class="learning_list"><a>象力与AI完美结合一起创造出最前</a></li>
                        <li class="learning_list"><a>沿的AI应用。</a></li>-->
						<p class="learning_list">愚夫智学主打无编程的AI应用制作模式，让每一个孩子都能成为独立的AI应用制作者，将孩子无穷的想象力与AI完美结合，一起创造出最前沿的AI应用。</p>
                    </ul>
                </div>
                <div class="learning col-lg">
                    <ul>
                        <li class="learning_title">
                            <img src="../../assets/images/learning3.png">
                            <div class="title_text"><b>深层学习</b></div>
                        </li>
                        <!--<li class="learning_list"><a>愚夫智学的AI深层学习课程将带给</a></li>
                        <li class="learning_list"><a>孩子更专业的AI学习体验，将每一</a></li>
                        <li class="learning_list"><a>个孩子都有机会成为AI小小科学家。</a></li>
                        <li class="learning_list"><a></a></li>
                        <li class="learning_list"><a></a></li>-->
						<p class="learning_list">愚夫智学的AI深层学习课程将带给孩子更专业的AI学习体验，让每一个孩子都有机会成为AI小小科学家。</p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
$(function(){
	if(document.body.clientWidth == 768){
		console.log('pad');
		$(".learning").css({"padding-left":"50px"});
		$(".title_text").css({"margin-left":"240px"});
	}
})
</script>

<style scoped>
	li a{
		color: #646262;
	}
	
	li a:hover{
		color: #2D1471;
	}
	#learning_out{
    background: url("../../assets/images/learning.png") no-repeat;
    background-size:100% auto;
	border-radius: 0.7em;
	}
	#learning_in{
		background-color: rgba(255, 255, 255, 0.68);
		background-size: 100% auto;
		border-radius: 0.7em;
		padding: 1em 5% 5% 7%;
		margin: 6% 0;
		margin-top: 10px;
		height: 400px;
	}
	#learning{
		position: relative;
		top: 55px;
		margin-bottom: 1px;
		height: 600px;
	}
@media(max-width: 1024px){
		
		#learning{
		border-top: #EAE9E9 2px solid;
		border-left: #EAE9E9 4px solid;
		border-right: #EAE9E9 10px solid;
		border-radius: 20px;
		margin-top: -54px;
		height: 1200px;
		margin-bottom: 60px;
	}
	#learning_out{
		background:none;
	}
	#learning_in{
		margin-bottom: 55px;
	}
	#learning_in ul{
		padding-left: 0px;
		margin-bottom: 20px;
	}
	.learning_title{
		margin-bottom: 50px;
	}
	.learning_title img{
		margin-left: 38%;
		margin-right: 38%;
		height: 70px;
		width: 70px;
	}
	.learning_title div{
		position: absolute;
		left: 0px;
		right: 0px;
		margin-left: 34%;
	}
	.learning_list {
		font-size: 0.9em;
		margin-bottom: 60px;
	}
	#ai{
		padding-left: 8px;
	}
}
@media(min-width: 666px) and (max-width: 668px){
	#learning{
		height: 950px;
	}
	.learning_title img{
		margin-left: 200px;
	}
	.title_text{
		border-left: 15px white solid;
	}
	#ai{
		margin-left: 185px;
	}	
}
@media(min-width:1921px) and (max-width: 2499px){
	#learning{
		height:800px;
	}
	#learning_out,#learning_in{
		height: 530px;
	}
}
@media(min-width: 2500px){
		
	#learning_out,#learning_in{
		height: 660px;
	}
	#learning_out{
		margin-bottom: 55px;
	}
	#learning{
		height: 1000px;
	}	
}
@media(min-width: 769px ){
	.learning{
		float: left;
		width:28%;
		margin-right: 8%;
	}
	.learning:last-child{
		margin-right: 0;
	}
	.learning ul{
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
	.learning ul a{
		font-size: 1.8em
	}
	.learning_title{
		text-align: center;
	}
	.learning_title b{
		display: inline-block;
		width: 100%;
		font-size: 1.6em;
		position: relative;
		top: -1em;
	}
	.learning_title img{
		width: 50%;
	}
	.learning_list{
		font-size: 1.2em;
		color: black;
		overflow:visible;
		word-break:normal;
		text-overflow: ellipsis;
		margin: 0.5em 0;
		margin-top: 0px;
		padding-bottom: 20px;
	}		
}
</style>