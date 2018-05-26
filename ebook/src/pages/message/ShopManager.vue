<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑" @click="handleSubmit">
	  		<div class="content">
	  			<ul>
		  			<li>
		  				<span>姓名：</span>
		  				<input type="text" name="" v-model="name" v-on:blur="handleBlurname(name)">
		  			</li>
		  			<li>
		  				<span>性别：</span>
		  				<select v-model="sex" @change="handleChangeSex(sex)">
						   <option>男</option>
						   <option>女</option>
						</select>
		  			</li>
		  			<li>
		  				<span>电话：</span>
		  				<input type="text" name="" v-model="phone" v-on:blur="handleBlurPhone(phone)">
		  			</li>
		  			<li>
		  				<span>籍贯：</span>
		  				<input type="text" name="" v-model="nativePlace">
		  			</li>
		  			<li>
		  				<span>图片：</span>
		  				<input type="file" name="">
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
				name: null,
				sex: null,
				phone: null,
				nativePlace: null

			}	 
		},
		methods: {
			handleBlurname (name) {
				if( name == null) {
					alert("店长名字不能为空")
				}
				
			},
			handleChangeSex () {

			},
			handleBlurPhone (phone) {
				if( phone == null ) {
					alert("店长手机号不能为空")
				}
			},
			handleSubmit () {
				const dataList = {
					"name" : this.name,
					"sex" : this.sex,
					"phone" : this.phone,
					"nativePlace" : this.nativePlace,
				}
				console.log(dataList)
				if( this.name == !null) {
					if( this.phone == !null ) {
						
					}else {
						alert("店长手机号不能为空")
					}
				}else {
					alert("店长名字不能为空")
				}
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
					width: 2.06rem
				select
					width: 2.06rem
					height: .3rem
					
					
					
		
	
</style>