<template>
  <div>
   <header-public></header-public>
   <nav-public></nav-public>	
   <div style="float:left">home</div>
   <ul>
   	<li v-for="item in "></li>
   </ul>
  </div>
</template>

<script>
	import HeaderPublic from '../../components/Header'
	import NavPublic from '../../components/Nav'
	import axios from 'axios'
	export default {
	  name: 'index',
	  components: {
	  	HeaderPublic,
	  	NavPublic
	  },
	  methods: {
	  	getIndexData () {
	  		axios.get('/api/index.json')
	  			.then(this.handleGetDataSucc.bind(this))
	  			.catch(this.handleGetDataErr.bind(this))
	  	},
	  	handleGetDataSucc (res) {
	  		console.log(res)
	  	},
	  	handleGetDataErr () {
	  		console.log('error')
	  	}
	  },
	  created () {
	  	this.getIndexData();
	  }
	}
</script>

<style>
	
</style>
