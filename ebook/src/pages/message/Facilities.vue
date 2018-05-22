<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑" @click="this.handleRedact">
	  		<div class="content">
	  			<div class="top"></div>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	 
	export default {
		name: 'message-detail',
		data() {
			return {
				chineseName: null,
				englishName: null
			}
		}
	}
 
	 
</script>

<style lang="stylus" scoped>
	.main
		overflow: hidden
		height: 7.4rem
		margin-left: .1rem
		margin-right: .1rem
		padding-left: .2rem
		padding-top: .2rem
		background: #fff
	.sub
		width: .68rem
		height: .34rem
		background: #57b99d
		border: none
		font-size: .18rem
		color: #fff
		font-weight: bold
		border-radius: .03rem
		margin-bottom: .05rem
	.content
		font-size: .16rem
		.top
			width:
		 
					
		
	
</style>