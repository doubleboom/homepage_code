<template>
	<div id="root">
		  <app-header />
		  <app-content />
		  <app-footer />
	</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: 'Main',
  components: {
	"app-header":Header,
	"app-content":Content,
	"app-footer":Footer
  }
}
</script>

<style>

</style>
