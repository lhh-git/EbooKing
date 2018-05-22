<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑">
	  		<div class="content">
	  			<ul>
		  			<li v-for="item in list">
		  				<span>{{item.title}}</span>
		  				<input type="text" name="" value="">
		  			</li>
	  			</ul>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	export default {
		name: 'message-basics',
		data() {
			return {
				chineseName: null,
				englishName: null,
				list: [
					{
						'title': '酒店中文名称：'
					}, {
						'title': '酒店英文名称：'
					}, {
						'title': '简介：'
					}, {
						'title': '城市/省份：'
					}, {
						'title': '地址：'
					}, {
						'title': '相近路口：'
					}, 
				]
			}
		},
		methods: {
			handleRedact() {
				alert()
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
		ul
			li
				margin-bottom: .3rem
				line-height: .3rem
				span
					display: block
					float: left
					width: 1.2rem
					text-align: right
					margin-right: .25rem
				input
					display: inline-block
					
					
					
		
	
</style>