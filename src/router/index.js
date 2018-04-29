import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/Main'
import ParticipantsView from '@/components/Participants'
import AboutView from '@/components/About'
import NewComersView from '@/components/NewComers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fund',
      name: 'fund',
      component: MainView
    },
    {
      path: '/participants',
      name: 'participants',
      component: ParticipantsView
    },
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/newcomers',
      name: 'newcomers',
      component: NewComersView
    }
  ]
})
