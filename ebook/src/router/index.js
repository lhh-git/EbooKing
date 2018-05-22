import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Order from '@/pages/order/order'
import RoomStatus from '@/pages/roomStatus/roomStatus'
import RoomPrice from '@/pages/roomPrice/roomPrice'
import Message from '@/pages/message/message'
import Schedule from '@/pages/schedule/schedule'
import FrontDesk from '@/pages/frontDesk/frontDesk'

// ----------信息维护
import Basics from '../pages/message/Basics'
import Detail from '../pages/message/Detail'
import Facilities from '../pages/message/Facilities' 
import Image from '../pages/message/Image'
import Stipulation from '../pages/message/Stipulation'
import ShopManager from '../pages/message/ShopManager'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/order',
      name: 'Order',
      component: Order,
    }, {
      path: '/roomStatus',
      name: 'RoomStatus',
      component: RoomStatus,
    }, {
      path: '/roomPrice',
      name: 'RoomPrice',
      component: RoomPrice,
    }, {
      path: '/message',
      name: 'Message',
      component: Message,
      children: [
        { path: '/basics', component: Basics },
        { path: '/detail', component: Detail },
        { path: '/facilities', component: Facilities },
        { path: '/image', component: Image },
        { path: '/stipulation', component: Stipulation },
        { path: '/shopManager', component: ShopManager}
      ],
      redirect: '/basics'
    }, {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    }, {
      path: '/frontDesk',
      name: 'FrontDesk',
      component: FrontDesk
    }
  ]
})
