<template>
<div id="about">
    <div class="title">
        <span class="backgroundtext">ABOUT</span>
        <div>
            <p>关于愚夫</p>
            <span>ABOUT YUFU</span>
        </div>
    </div>
    <div class="container">
        <div id="about_in">
            <p class="d-none d-sm-block">人工智能时代已经降临，了解和学习人工智能将成为未来公民教育中必不可少的环节。愚夫团队来自哈佛大学、康奈尔大学等世界顶尖名校，</p>
            <p class="d-none d-sm-block">秉持“用AI教育连接未来”的理念，将原本高深的AI知识简化为中小学生可以理解、</p>
            <p class="d-none d-sm-block">参与的教学过程，培养拥有复杂问题解决能力、跨学科思维能力、和健康品质的21世纪人才。</p>
			<p class="d-block d-sm-none">人工智能时代已经降临，了解和学习人工智能将成为未来公民教育中必不可少的环节。愚夫团队来自哈佛大学、康奈尔大学等世界顶尖名校，秉持“用AI教育连接未来”的理念，将原本高深的AI知识简化为中小学生可以理解、参与的教学过程，培养拥有复杂问题解决能力、跨学科思维能力、和健康品质的21世纪人才。</p>
        </div>
        <div id="about_de">
            <img class="d-none d-lg-block" src="../../assets/images/about.png">
            <ul>
                <li id="eyeli"><img id="eye" src="../../assets/images/about_l.png"></li>
                <li id="about_ti">
                    <p><b id="aib">用AI教育连接未来</b></p>
                    <p>Content the future with AI education</p>
                </li>
				<li><img id="c3"  class="d-block d-lg-none"  src="../../assets/images/about.png"></li>
                <li id="about_go">
						<a href="">解决问题</a>
                    	<a href="">思维能力</a>
                    	<a href="">完善人格</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
	#about{
		margin-top: 3%;
	}
	#about_in>p{
		text-align: center;
		margin: 0.5em 0;
		font-size: 1.1em;
	}
	#about_de{
		overflow: hidden;
		margin-top: 3%;
	}
	#about_de>img{
		float: left;
		width: 48%;
	}
	#about_de ul{
		float: left;
		margin-left: 4%;
		width: 48%;
		margin-top: 2em;
		list-style-type: none;
		padding: 0;
	}
	#about_de li{
		margin: 1em 0;
	}
	#about_ti b{
		font-size: 2em;
		color: #7DCCC7;
	}
	#about_ti p{
		margin: 0.4em 0;
		font-size: 0.8em;
		color: #B8B8B8;
	}
	#about_go{
		overflow: hidden;
	}
	#about_go a{
		float: left;
		padding: 0 0.7em;
		border-right: 1px solid #B8B8B8;
		color: #B8B8B8;
		font-size: 1.4em;
	}
	#about_go a:first-child{
		padding-left: 0;
	}
	#about_go a:last-child{
		border: none;
	}
	#c3{
		width: 100%;
	}
	@media(max-width: 1024px){
		#about_de ul{
			margin-bottom: 30px;
		}
		#about_in p{
			font-size: 0.75em;
		}
		#about_de ul{
			width: 100%;
			margin-left: 0px;
		}
		#eyeli{
			position: relative;
			padding-bottom: 10px;
		}
		#eye{
			position: absolute;
			width: 50px;
			height: 50px;
			top:50%; 
			left:50%;
			transform: translate(-50%,-50%);
		}
		#about_ti p{
			text-align: center;
			font-size: 0.6em;
		}
		#aib{
			font-size: 1.0em;
		}
		#about_go{
			padding-left: 5%;
		}
		#about_go a{
			font-size: 0.9em;
			padding-right: 8px;
			padding-left: 8px;
		}
	}
</style>