import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Copypaste from '@/views/Copypaste.vue'
import Artist from '@/views/Artist.vue'
import Tag from '@/views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Spin The Wheel Song Requests - By RadioJasper',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About this website',
    }
  },
  {
    path: '/list',
    name: 'Copypaste',
    component: Copypaste,
    meta: {
      title: 'Current artists in a list',
    }
  },
  {
    path: '/artist/:singleArtist',
    name: 'artist',
    component: Artist,
    meta: {
      title: 'Artist',
    }
  },
  {
    path: '/tag/:artistID',
    name: 'tag',
    component: Tag,
    meta: {
      title: 'Tag',
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));
  next();
});

export default router
