<template>
<div id="content">
	<swiper />
	<aboutus />
	<product />
	<team />
	<learning />
	
		
	<div id="back_to_top">
		<a href="#"><img src="../assets/images/back.png"></a>
	</div>
</div>
</template>

<script>

import Swiper from './maindir/Swiper'
import Learning from './maindir/Learning'
import Product from './maindir/Product'
import Aboutus from './maindir/About'
import Team from './maindir/Team'
export default {
  name: 'Content',
  components: {
    "swiper":Swiper,
	"learning":Learning,
	"product":Product,
	"aboutus":Aboutus,
	"team":Team
  }
}
	
$(function(){
	if(document.body.clientWidth <= 768){
		console.log("phone");
		var p=0;
		var t=0;
            $(window).scroll(function(e){
                p=$(this).scrollTop();
                if(t<=p){
    				$("#back_to_top").fadeIn();
					$("#xsmenu").slideUp();
                }
                else{
					$("#back_to_top").fadeOut();
					$("#xsmenu").slideUp();
                }
                t = p;
            })
	}
});
</script>

<style scoped>
#back_to_top{
		display: none;
		position: fixed;
		bottom: 30px;
		right: 20px;
		z-index: 999;
	}
</style>
