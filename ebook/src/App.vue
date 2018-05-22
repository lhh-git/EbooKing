<template>
  <div id="app">
     <router-view/>   
     <!-- 标签，显示当前路由下对应的文件 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
	#app
		min-width: 1024px
		_width: 1024px

</style>
