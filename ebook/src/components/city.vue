 <template>
	<div>
	  	<div class="main">
	  		<div class="btn">
	  			<i class="redact iconfont">&#xe61f;</i>
	  			<input type="submit" value="编辑" class="sub" >
	  		</div>   
	  		<div class="content">
	  			<ul>
		  			<li v-for="item in list">
		  				<span>{{item.title}}</span>
		  				<input type="text" name="" value="">
		  			</li>
		  			<li>
		  				<span>简介：</span>
		  				<textarea></textarea>
		  			</li>
		  			<li>
		  				<span>省份/城市：</span>
		  				<select v-model='proIndex' @change="handleChange(proIndex)">
						    <option v-for="item in provice">{{item.name}}</option>	
						</select>
						
						<select v-model='cityIndex'>
						   <option value ="volvo" v-for="item in city">{{item}}</option>
						</select>
		  			</li>
		  			<li>
		  				<span>相近路口：</span>
		  				<input type="text" name="" value="">
		  			</li>
		  			<li class="longitude">
		  				<span>经度：</span>
		  				<input type="text" name="" value="">
		  			</li>
		  			<li class="latitude">
		  				<span>纬度：</span>
		  				<input type="text" name="" value="">
		  			</li>
	  			</ul>
	  		</div>
	  	</div>
	  
	</div>
</template>

<script>
	import axios from 'axios'
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
						'title': '地址：'
					}
				],
				proIndex : "北京",
				cityIndex: "朝阳区",
				provice: [],
				city: [] 
			}
		},
		methods: {
	  		getCityList () {
	  			axios.get('/api/city.json')
	  				.then(this.handleGetDataSucc.bind(this))
	  				.catch(this.handleGetDataErr.bind(this))
	  		},
	  		handleGetDataSucc (res) {
	  			this.provice = res.data
	  			let data = res.data
	  		},
	  		handleGetDataErr () {
	  			console.log('error')
	  		},
	  		handleChange (  proIndex ) {
	  			this.city = []
	  			let data = this.provice
	  			for( var i=0; i<data.length; i++ ) {
	  				let citys = data[i].city
	  				if( data[i].name == proIndex){
	  					let cityData = data[i].city
	  					for( var j=0; j<cityData.length; j++) {
	  						this.city.push(cityData[j].name)
	  					}	
	  				}
	  			}
	  			
	  		}
		},
		created () {
			this.getCityList()
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
						margin-right: .1rem
					input
						display: inline-block
						width: 4rem
					textarea
						width: 7.9rem
					select
						width: 1.3rem
				.longitude
					float: left
					input
						width: 1.5rem
				.latitude
					float: left
					margin-left: .1rem
					span
						width: .75rem
					input
						width: 1.5rem
					
					
					
		
	
</style>