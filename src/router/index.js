import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/Main'
import ParticipantsView from '@/components/Participants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/participants',
      name: 'participants',
      component: ParticipantsView
    }
  ]
})
