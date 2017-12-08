import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shasta from '@/components/Shasta'
import Burney from '@/components/Burney'
import HotelRoom from '@/components/HotelRoom'
import Reno from '@/components/Reno'
import Carson from '@/components/Carson'
import LakeTahoeNV from '@/components/LakeTahoeNV'
import Stateline from '@/components/Stateline'
import LakeTahoeCA from '@/components/LakeTahoeCA'
import CircusCircus from '@/components/CircusCircus'
import Truckee from '@/components/Truckee'
import RenoFinal from '@/components/RenoFinal'
import LavaBeds from '@/components/LavaBeds'
import Klamath from '@/components/Klamath'
import SaltCreek from '@/components/SaltCreek'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shasta',
      name: 'Shasta',
      component: Shasta
    },
    {
      path: '/burney',
      name: 'Burney',
      component: Burney
    },
    {
      path: '/hotel-room',
      name: 'HotelRoom',
      component: HotelRoom
    },
    {
      path: '/explore-reno',
      name: 'Reno',
      component: Reno
    },
    {
      path: '/carson',
      name: 'Carson',
      component: Carson
    },
    {
      path: '/lake-tahoe-nv',
      name: 'LakeTahoeNV',
      component: LakeTahoeNV
    },
    {
      path: '/stateline',
      name: 'Stateline',
      component: Stateline
    },
    {
      path: '/lake-tahoe-ca',
      name: 'LakeTahoeCA',
      component: LakeTahoeCA
    },
    {
      path: '/inside-circus',
      name: 'CircusCircus',
      component: CircusCircus
    },
    {
      path: '/truckee',
      name: 'Truckee',
      component: Truckee
    },
    {
      path: '/reno-final',
      name: 'RenoFinal',
      component: RenoFinal
    },
    {
      path: '/lava-beds',
      name: 'LavaBeds',
      component: LavaBeds
    },
    {
      path: '/klamath',
      name: 'Klamath',
      component: Klamath
    },
    {
      path: '/salt-creek',
      name: 'SaltCreek',
      component: SaltCreek
    }
  ]
})
