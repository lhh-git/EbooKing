<template>
	<div>
		<header-public></header-public>
	  	<nav-public></nav-public>
	  	<div class="main">
	  		<Message></Message>
	  		<input type="submit" value="返回" class="back"  >
	  		<input type="submit" value="编辑" class="back redact"  >
	  		<div class="content">
	  			 <ul class="update">
	  			 	<li class="update-image">
	  			 		<span>房间图片：</span>
	  			 		<img src="../../../static/img/u143.png">
	  			 	</li>
	  			 	<li class="update-name">
	  			 		<span>房间名称：</span>
	  			 		<input type="" name="" value="8601">
	  			 	</li>
	  			 	<li class="update-shape">
	  			 		<span>房间类型：</span>
	  			 		<input type="radio" name="radio1" class="day"/>
	  			 		<b class="day-title">过夜房 </b>
	  			 		<input type="" name="" class="day-input">
						<input type="radio" name="radio1" class="hour"/>
						<b class="hour-title">小时房 </b>
						<input type="" name="" class="hour-input">
	  			 	</li>
	  			 	<li class="update-aera">
	  			 		<span>房间面积：</span> 
	  			 		<input type="" name="">㎡
	  			 	</li>
	  			 	<li class="update-floor">
	  			 		<span>房间楼层：</span>
	  			 		<input type="" name="">层
	  			 	</li>
	  			 	<li class="update-count">
	  			 		<span>适合人数：</span>
	  			 		<input type="" name="">人
	  			 	</li>
	  			 	<li class="update-window">
	  			 		<span>是否有窗：</span>
	  			 		<select>
						   <option value ="volvo">有</option>
						   <option value ="saab">无</option>
						</select>
	  			 	</li>
	  			 	<li class="update-bedType">
	  			 		<span>床型：</span>
	  			 		<select>
						   <option value ="volvo">大床</option>
						   <option value ="saab">双床</option>
						   <option value ="saab">圆床</option>
						</select>
	  			 	</li>
	  			 	<li class="update-broadBand">
	  			 		<span>宽带：</span>
	  			 		<select>
						   <option value ="volvo">有</option>
						   <option value ="saab">无</option>
						</select>
	  			 	</li>
	  			 </ul>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	 
	export default {
		name: 'message-basics',
		components: {
		   
		},
		data() {
			return {
			}
		},
		methods: {
			 
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
	.back
		width: .68rem
		height: .34rem
		background: #57b99d
		border: none
		font-size: .18rem
		color: #fff
		font-weight: bold
		border-radius: .03rem
		margin-bottom: .05rem
		cursor: pointer
	.content
		overflow: hidden
		font-size: .16rem
		.update
			overflow: hidden
			margin-left: .4rem
			li
				overflow: hidden
				margin-bottom: .4rem
				span
					margin-right: .1rem			 
			.update-image
				overflow: hidden
				margin-top: .2rem
				position: relative
				span
					margin-top: 0rem
					position: absolute
					top: 0
				img
					height: 1.2rem
					margin-left: .95rem
			.update-name
				input
					width: 2.1rem
			.update-shape
				height: .7rem
				position: relative	
				.day-title
					position: absolute
					top: .02rem
					left: 1.2rem
				.day-input
					position: absolute
					top: 0rem
					left: 1.9rem
					width: 1.15rem
					height: .2rem
				.hour
					position: absolute
					top: .5rem
					left: .94rem
				.hour-title
					position: absolute
					top: .47rem
					left: 1.2rem
				.hour-input
					position: absolute
					top: .45rem
					left: 1.9rem
					width: 1.15rem
					height: .2rem
			.update-aera
				input
					width: 1.2rem
					margin-right: .1rem
			.update-floor
				input
					width: 1.2rem
					margin-right: .1rem
			.update-count
				input
					width: 1.2rem
					margin-right: .1rem
			.update-window
				select
					width: 1.2rem
			.update-bedType
				select
					margin-left: .33rem
					width: 1.2rem
			.update-broadBand
				select
					margin-left: .33rem
					width: 1.2rem
					 
					 
					 
					
		
	
</style>