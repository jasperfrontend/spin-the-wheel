import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Spin The Wheel Song Requests - By RadioJasper',
      metaTags: [
        {
          name: 'description',
          content: 'Spin The Wheel is a weekly show on the Twitch channel of RadioJasper. This page features an overview of the artists currently on the wheel.'
        },
        {
          property: 'og:description',
          content: 'Spin The Wheel is a weekly show on the Twitch channel of RadioJasper. This page features an overview of the artists currently on the wheel.'
        }
      ]
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
