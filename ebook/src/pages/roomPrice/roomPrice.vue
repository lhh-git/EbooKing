<template>
    <div>
	    <header-public></header-public>
	    <nav-public></nav-public>	
	    <div class="main">
	   		<p class="basis">
	   			<i class="iconfont">&#xe600;</i>
	   			<span>房价维护</span>
	   		</p>
	   		<p class="roomPrice-nav">房价维护</p>
	    </div>
	</div>
</template>

<script>
	import HeaderPublic from '../../components/Header'
	import NavPublic from '../../components/Nav'
	export default {
	  name: 'room-price',
	  components: {
	  	HeaderPublic,
	  	NavPublic
	  }
	}
</script>

<style lang="stylus" scoped>
	.main
		float: left
		width: 84%
		height: 8.7rem
		background: #e5eaef
		.basis
			padding-top: .15rem
			margin-left: .1rem
			font-size: .18rem
			color: #6c8497
		.roomPrice-nav
			margin-top: .15rem
			margin-left: .1rem
			font-size: .18rem
			 
			 
</style>