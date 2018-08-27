import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/Home.vue');
const Examine = () => import('../pages/Examine.vue');
const About = () => import('../pages/About.vue');
const Product = () => import('../pages/Product.vue');
const Schedule = () => import('../pages/Schedule.vue');
const Career = () => import('../pages/Career.vue');
const News = () => import('../pages/News.vue');
const Wisdom = () => import('../pages/Wisdom.vue');
const Composite = () => import('../pages/Composite.vue');

Vue.use(Router)
var router = new Router({
  //mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/examine',
      name: 'Examine',
      component: Examine
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },{
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },{
        path: '/career',
        name: 'Career',
        component: Career
    },{
        path: '/news',
        name: 'News',
        component: News
    },{
      path: '/wisdom',
        name: 'Wisdom',
        component: Wisdom
    },{
      path: '/composite',
        name: 'Composite',
        component: Composite
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0);
  return next();
})

export default router