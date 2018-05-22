<template>
	<div>
	   <header-public></header-public>
	   <nav-public></nav-public>	
	   <div class="main">
	   		<p class="basis">
	   			<i class="iconfont">&#xe645;</i>
	   			<span>信息维护</span>
	   		</p>
	   		<ul class="message-nav">
   				<li v-for="item in navList">
   					<router-link :to="{path:item.murl}">
   						{{item.title}}
   					</router-link>
   				</li>
	   		</ul>
	   		<!-- <input type="submit" name="" class="sub" value="编辑"> -->
	   		<router-view/> 
	   </div>
	</div>
</template>

<script>
	import HeaderPublic from '../../components/Header'
	import NavPublic from '../../components/Nav'
	import Basics from './Basics'
	import Detail from './Detail'
	import Facilities from './Facilities'
	export default {
		name: 'message',
		components: {
		  	HeaderPublic,
		  	NavPublic,
		  	Basics,
		  	Detail,
		  	Facilities

		},

		data() {
			return {
				navList: [
					{
						'title': '基本信息',
						'murl': '/Basics'
					}, {
						'title': '详细信息',
						'murl': '/Detail'
					}, {
						'title': '酒店设施',
						'murl': 'Facilities'
					}, {
						'title': '酒店图片',
						'murl': ''
					}, {
						'title': '房型信息',
						'murl': ''
					}, {
						'title': '酒店政策',
						'murl': ''
					}, {
						'title': '店长信息',
						'murl': ''
					}
				]
			}
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
		.message-nav
			width: 100%
			overflow: hidden
			margin-top: .15rem
			margin-left: .1rem
			li
				float: left
				line-height: .47rem
				text-align: center
				width: 1.16rem
				height: .47rem
				background: #d7dee5
				border-radius: .04rem .04rem 0 0
				font-size: .18rem
				color: #6c8497
				margin-right: .2rem
				cursor: pointer
		.sub
			margin-top: .2rem
			width: .68rem
			height: .34rem
			background: #57b99d
			border: none
			font-size: .18rem
			color: #fff
			font-weight: bold
			border-radius: .03rem
</style>