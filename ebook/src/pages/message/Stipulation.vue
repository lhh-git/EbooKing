<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑">
	  		<div class="content">
	  			<ul class="top">
	  				<li>最早入住&nbsp;14:00</li>
	  				<li>最晚入住&nbsp;不限</li>
	  				<li>最早离店&nbsp;不限</li>
	  				<li>最晚离店&nbsp;12:00</li>
	  			</ul>	
	  			<div class="middle">
		  			<ul class="middle-title">
		  				<li class="middle-title-one">儿童政策：</li>
		  				<li>宠物政策：</li>
		  				<li>支付方式：</li>
		  			</ul>
		  			<ul class="middle-content">
		  				<li class="middle-content-one">
			  				<input type="checkbox" name="">
			  				<span>不接受18岁以下客人在无监护人陪同的情况下入住</span>
		  				</li>
		  				<li>不可携带宠物</li>
		  				<li>可刷卡、中国银联(China UnionPay)、支持第三方支付</li>
		  			</ul>
	  			</div> 
	  			<ol class="bottom">
	  				 <li><input type="checkbox" name=""><span>不可刷卡</span></li>
	  				 <li class="bottom-li2"><input type="checkbox" name=""><span>可刷卡</span></li>
	  				 <li><input type="checkbox" name=""><span>Master</span></li>
	  				 <li><input type="checkbox" name=""><span>Visa</span></li>
	  				 <li><input type="checkbox" name=""><span>Amex</span></li>
	  				 <li><input type="checkbox" name=""><span>Jcb</span></li>
	  				 <li class="bottom-li7"><input type="checkbox" name=""><span>中国银联(China UnionPay)</span></li>
	  				 <li><input type="checkbox" name=""><span>不支持第三方支付</span></li>
	  				 <li><input type="checkbox" name=""><span>支持第三方支付</span></li>
	  			</ol>

	  		</div>
	  	</div>
	</div>
</template>

<script>
	 
	export default {
		name: 'message-detail',
		data() {
			return {
		 		 
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
		overflow: hidden
		.top
			margin-top: .2rem
			li
				float: left
				font-size: .18rem
				color: #303135
				margin-left: 1rem
		.middle
			overflow: hidden
			margin-top: .76rem
			font-size: .16rem
			.middle-title
				float: left
				width: 1rem
				color: #888892
				li
					margin-bottom: .4rem
			.middle-content
				float: left
				color: #2d2e32
				li
					margin-bottom: .4rem
		.bottom
			overflow: hidden
			margin-left: 1rem
			li
				float: left	
				margin-right: .75rem
				margin-top: .5rem
			.bottom-li2
				margin-right: 8rem	
			.bottom-li7
				margin-right: 3rem	
		
	
</style>