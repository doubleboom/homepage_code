<template>
<div class="swiper-container" id="home_swiper">
	<swiper :options="swiperOption">
		<swiper-slide><img src="../../assets/images/swiper0.png"></swiper-slide>
		<swiper-slide><img src="../../assets/images/swiper1.png"></swiper-slide>
		<swiper-slide><img src="../../assets/images/swiper2.png"></swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</div>
</template>

<script>	
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
	
export default{
		name: 'swiperpage',
	    data(){
			return{
				swiperOption: {
					autoplay: true,
					speed:1000,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						bulletClass: 'my-bullet',
						bulletActiveClass: 'my-active'
					},
					paginationClickable: true,
					navigation: {
      					nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
    				}
				}
			}
		},
		components: {
			swiper,
    		swiperSlide
		},
		mounted(){
		
		}	
	}
</script>

<style>
	#home_swiper img{
		width: 100%;
	}
	.my-bullet{
		  border-radius: .02rem;
		  width: .08rem;
		  height: .08rem;
		  margin: 0 .03rem;
		  display: inline-block;
		  background: rgba(0,0,0,0.20);
	}
	.my-active{
		background: #E9BD25;
		width: .08rem;
		opacity:0.7;
	}
	@media(max-width: 1024px){
		#home_swiper{
			padding-left: 0px;
			padding-right: 0px;
		}
		.swiper-slide-active{
			width: 100%;
		}
		.my-bullet{
			height: .04rem;
			width: .04rem;
		}
		.swiper-container-horizontal > .swiper-pagination-bullets{
			bottom: -5px;
		}
	}
</style>
