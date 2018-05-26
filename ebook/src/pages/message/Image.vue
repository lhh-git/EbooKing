<template>
	<div>
	  	<div class="main">
	  		<div class="content">
	  			<div class="detail" v-for="item in list">
	  				<p class="detail-title">{{item.title}}</p>
	  				<div class="detail-img">
		  				<img :src="item.url">
		  				<input class="upload" type="file"/>  
		  			</div>
	  			</div>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	 
	export default {
		name: 'message-detail',
		data() {
			return {
		 		list: [
		 			{
		 				'title': '首页',
            			'url': '../../../static/img/u56.png'
		 			}, {
		 				'title': '大堂',
		 				'url': '../../../static/img/u56.png'
		 			}, {
		 				'title': '客房',
		 				'url': '../../../static/img/u56.png'
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
		font-size: .16rem
		.detail
			margin-right: .2rem
			margin-top: .3rem
			.detail-title
				font-size: .18rem
				padding-bottom:.14rem
				border-bottom: .01rem solid #333 
			.detail-img
				position: relative
				margin-top: .14rem
				width: 2rem
				height: 2rem
				img
					width: 2rem
					height: 2rem	
				.upload
					position: absolute
					top: 0
					left: 0
					width: 2rem
					height: 2rem
					opacity: 0; filter:Alpha(opacity=0)
					cursor: pointer
					
					

				
	
</style>