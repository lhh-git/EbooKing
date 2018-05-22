<template>
  <div>
   <header-public></header-public>
   <nav-public></nav-public>	
   <div style="float:left">home</div>
  </div>
</template>

<script>
	import HeaderPublic from '../../components/Header'
	import NavPublic from '../../components/Nav'
	export default {
	  name: 'index',
	  components: {
	  	HeaderPublic,
	  	NavPublic
	  }
	}
</script>

<style>
	
</style>
