<template>
<div class="swiper-container container" id="home_swiper">
	<swiper :options="swiperOption">
		<swiper-slide><img src="../../assets/images/swiper0.png"></swiper-slide>
		<swiper-slide><img src="../../assets/images/swiper1.png"></swiper-slide>
		<swiper-slide><img src="../../assets/images/swiper2.png"></swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		<div class="swiper-button-prev d-none d-sm-block" slot="button-prev"></div>
		<div class="swiper-button-next d-none d-sm-block" slot="button-next"></div>
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
						clickable: true
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

<style scoped>
	
</style>
