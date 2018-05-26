<template>
  <div class="navs">
    <ul class="list">
      
      <li v-for="item in navList">
        <router-link :to="{path:item.murl}">
          <p></p>
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </li>
     
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {
            'title': '首页',
            'icon': '&#xe64b;',
            'murl': '/'
          }, {
            'title': '订单管理',
            'icon': '&#xe6e9;',
            'murl': '/order'
          }, {
            'title': '房态管理',
            'icon': '&#xe6d3;',
            'murl': '/roomStatus'
          }, {
            'title': '房价管理',
            'icon': '&#xe628;',
            'murl': '/roomPrice'
          }, {
            'title': '信息维护',
            'icon': '&#xe645;',
            'murl': '/message'
          }, {
            'title': '审核进度',
            'icon': '&#xe600;',
            'murl': '/schedule'
          }, {
            'title': '前台营业',
            'icon': '&#xe64b;',
            'murl': '/frontDesk'
          }
        ],
       navActive:'首页'
      }
    },
    methods: {
       
    }
  }
</script>
<style lang="stylus" scoped>
  .navs
    float: left
    width: 16%
    height: 9.9rem
    background: #283745
    .list
      padding-top: 0.6rem
      li
        position: relative
        left: 0
        top: 0
        line-height: .4rem
        cursor: pointer
        width: 100%
        height: .4rem
        font-size: .18rem
        color: #fff
        a
          display: block
        i
          margin-left: 22.6%
          color: #fff
        span
          margin-left: 7.4%
          color: #fff
      li:hover
        background: #314354
        p
          position: absolute
          left: 0
          top: 0
          width: 1.7%;
          height: 100%;
          background: #2688d3;
          

 
</style>



 