// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './css/home.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

$(function(){
	if(document.body.clientWidth >= 2500){
		console.log('>=2500');
	}
});

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


