<template>
	<div>
	  	<div class="main">
	  		<div class="btn">
	  			<i class="redact iconfont">&#xe61f;</i>
	  			<input type="submit" value="编辑" class="sub" @click="this.handleClickSubmit">
	  		</div>
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
					}
				]
			}
		},
		methods: {
			handleClickSubmit() {
				alert()
			}
		}
	}
 
	 
</script>

<style lang="stylus" scoped>
	.main
		overflow: hidden
		height: 8.7rem
		margin-left: .1rem
		margin-right: .1rem
		padding-left: .2rem
		padding-top: .2rem
		background: #fff
		.btn
			width: .68rem
			height: .34rem
			background: #57b99d
			border-radius: .03rem
			margin-bottom: .05rem
			line-height: .34rem
			.redact
				float: left
				font-size: .22rem
				color: #fff
			.sub
				float: left
				border: none
				font-size: .18rem
				color: #fff
				font-weight: bold
				background: #57b99d
				margin-top: .05rem
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