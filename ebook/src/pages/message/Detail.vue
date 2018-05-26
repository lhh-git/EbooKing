<template>
	<div>
	  	<div class="main">
	  		<input type="submit" name="" class="sub" value="编辑" @click="handleClick">
	  		<div class="content">
	  			<ul>
		  			<li>
		  				<span>所属集团品牌：</span>
		  				<input type="text" name="" value="" v-model="brand">
		  			</li>
		  			<li>
		  				<span>星级：</span>
		  				<input type="text" name="" value="" v-model="starLevel">
		  			</li>
		  			<li>
		  				<span>开业年月：</span>
		  				<input type="date" value="2015-09-24" v-model="startTime"/>
		  			</li>
		  			<li>
		  				<span>最近装修年月：</span>
		  				<input type="date" value="2015-09-24" v-model="fitmentTime"/>
		  			</li>
		  			<li>
		  				<span>客房总数：</span>
		  				<input type="text" name="" value="" v-model="roomCount">
		  			</li>
		  			<li>
		  				<span>前台电话：</span>
		  				<input type="text" name="" value="" v-model="phone">
		  			</li>
		  			<li>
		  				<span>传真：</span>
		  				<input type="text" name="" value="" v-model="fax">
		  			</li>
		  			<li>
		  				<span>发票类型：</span>
						<select v-model="invoice" @change="handleChange(invoice)">
						   <option >增值税发票</option>
						   <option >普通发票</option>
						   <option >无发票</option>
						</select>
		  			</li>

 				</ul>
	  		</div>
	  	</div>
	</div>
</template>

<script>
	 
	export default {
		name: 'message-detail',
		data() {
			return {
				brand: null,         //所属集团品牌
				starLevel: null,     //星级
				startTime: null,     //开业年月
				fitmentTime: null,   //最近装修年月
				roomCount: null,     //客房总数
				phone: null,         //前台电话
				fax: null,           //传真
				invoice: null        //发票类型
			}
		},
		methods: {
			handleChange (invoice) {
				
			},
			handleClick () {
				const dataList = {
					"brand": this.brand,
					"starLevel": this.starLevel,
					"startTime": this.startTime,
					"fitmentTime": this.fitmentTime,
					"roomCount": this.roomCount,
					"phone": this.phone,
					"fax": this.fax,
					"invoice": this.invoice,
				}
				console.log(dataList)
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
		ul
			li
				margin-bottom: .3rem
				line-height: .3rem
				span
					float: left
					display: block
					width: 1.2rem
					text-align: right
					margin-right: .25rem
				input
					display: inline-block
					width: 2.03rem
					height: .25rem
				select
					width: 2.03rem
					height: .25rem
					
		
	
</style>