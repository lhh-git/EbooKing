<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑">
	  		<div class="content">
	  			<div class="top">
	  				<p class="top-title">主要设施</p>
  					<p class="top-checkbox" v-for="item in oneList">
  						<input type="checkbox" disabled="true"/>
  						<span>{{item.title}}</span>
  					</p>
	  			</div>
	  			<div class="bottom">
	  				<p class="bottom-title">房间设施</p>
  					<p class="bottom-checkbox" v-for="item in twoList">
  						<input type="checkbox" disabled="true"/>
  						<span>{{item.title}}</span>
  					</p>
	  			</div>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	export default {
		name: 'message-facilities',
		data() {
			return {
				oneList: [
		      {
		        'title': '收费停车场'
		      }, {
		        'title': '免费停车场'
		      }, {
		        'title': '免费WIFI'
		      }, {
		        'title': '餐厅'
		      }, {
		        'title': '电梯'
		      }, {
		        'title': '24小时前台服务'
		      }, {
		        'title': '行李寄存'
		      }
			  ],
			  twoList: [
			  	{
		        'title': '叫醒服务'
		      }, {
		        'title': '24小时热水'
		      }, {
		        'title': '无烟房'
		      }, {
		        'title': '宽带上网'
		      }, {
		        'title': '空调'
		      }, {
		        'title': '洗漱用品'
		      }, {
		        'title': '暖气'
		      }, {
		        'title': '咖啡壶/茶具'
		      }, {
		        'title': '独立卫生间'
		      }, {
		        'title': '淋浴设施'
		      }
			  ]
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
		margin-top: .3rem
		margin-right: .2rem
		overflow: hidden
		.top
			width: 100%
			overflow: hidden
			.top-title
				height: .45rem
				border-bottom: .01rem solid #333
				font-size: .20rem
				font-weight: bold
			.top-checkbox
				float: left
				margin-top: .26rem
				cursor: pointer
				span
					margin-right: .45rem
					margin-left: .05rem
		.bottom
			width: 100%
			margin-top: 1rem
			overflow: hidden
			.bottom-title
				height: .45rem
				border-bottom: .01rem solid #333
				font-size: .20rem
				font-weight: bold
			.bottom-checkbox
				float: left
				margin-top: .26rem
				cursor: pointer
				span
					margin-right: .45rem
					margin-left: .05rem 
					
		
	
</style>