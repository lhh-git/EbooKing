<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑">
	  		<div class="content">
	  			<ul>
		  			<li>
		  				<span>姓名：</span>
		  				<input type="text" name="" value="">
		  			</li>
		  			<li>
		  				<span>性别：</span>
		  				<select>
						   <option value ="volvo">男</option>
						   <option value ="saab">女</option>
						</select>
		  			</li>
		  			<li>
		  				<span>电话：</span>
		  				<input type="text" name="" value="">
		  			</li>
		  			<li>
		  				<span>籍贯：</span>
		  				<input type="text" name="" value="">
		  			</li>
		  			<li>
		  				<span>图片：</span>
		  				
		  			</li>

	  			</ul>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	export default {
		name: 'message-shopManager',
		data() {
			return {


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
		height: 8.7rem
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
		margin-top: .2rem
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
				select
					width: 2.06rem
					height: .3rem
					
					
					
		
	
</style>