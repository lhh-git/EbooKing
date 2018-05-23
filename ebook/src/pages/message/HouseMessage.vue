<template>
	<div>
	  	<div class="main">
	  		<div class="content" v-for="item in list">
	  			<div class="content-img">
	  				<p class="content-img-title">{{item.title}}</p>
	  			</div> 
	  			<div class="content-main">
		  			<p class="content-count">最多入住人数：<span>{{item.count}}</span></p>
		  			<p class="content-area">面积：<span>{{item.area}}</span></p>
		  			<p class="content-shape">床型：<span>{{item.redact}}</span></p>
		  			<router-link to="/HouseMessageDetail">
   						<p class="content-redact">编辑房型</p>
   					</router-link>
   				</div>	
		  	</div>	
	  	</div>
	</div>
</template>

<script>
	import HouseMessageDetail from './HouseMessageDetail'
	export default {
		name: 'message-houseMessage',
		components: {
		  HouseMessageDetail 
		},

		data() {
			return {
		 		list: [
		 			{
		 				'title': '8601',
            			'count': '2人',
            			'area': '20㎡',
            			'redact': '大床'
		 			}, {
		 				'title': '8602',
            			'count': '2人',
            			'area': '26㎡',
            			'redact': '大床'
		 			}, {
		 				'title': '8603',
            			'count': '2人',
            			'area': '30㎡',
            			'redact': '大床'
		 			}
		 		]
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
		background: #fff
	.content
		float: left
		font-size: .16rem
		width: 2.68rem
		height: 4.02rem
		border: .01rem solid #e4e3e8
		margin-top: .2rem
		margin-right: .12rem
		.content-img
			position: relative
			overflow: hidden
			width: 100%
			height: 2.68rem
			background: pink
			.content-img-title
				position: absolute
				left: 0
				bottom: 0
				width: 100%
				height: .4rem
				background: rgba(0, 0, 0, .5)
				line-height: .42rem
				padding-left: .13rem
				color: #fff
		.content-main
			overflow: hidden
			margin-top: .2rem
			margin-left: .15rem
			p
				width: 100%
				height: .27rem
				color: #7e7d82
				span
					color: #2b2b2b
					font-weight: bold
					margin-left: .08rem
			.content-redact
				margin-left: 1.7rem
				cursor: pointer
				color: #0066FF
	
</style>