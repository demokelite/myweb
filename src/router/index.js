import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Portfolio from '@/views/Portfolio.vue';
import Contact from '@/views/Contact.vue';
import RandomVideo from '@/views/random_pages/RandomVideo.vue';
import RandomImage from '@/views/random_pages/RandomImage.vue';
import RandomImage2 from '@/views/random_pages/RandomImage2.vue';
import RandomImage3 from '@/views/random_pages/RandomImage3.vue';
import RandomImage4 from '@/views/random_pages/RandomImage4.vue';
import RandomImage5 from '@/views/random_pages/RandomImage5.vue';
import RandomImage6 from '@/views/random_pages/RandomImage6.vue';
import RandomImage7 from '@/views/random_pages/RandomImage7.vue';
import RandomImage8 from '@/views/random_pages/RandomImage8.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import CookiePolicy from '@/views/CookiePolicy.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },

    {
      path: '/random-video',
      name: 'random-video',
      component: RandomVideo
    },
    {
      path: '/random-image',
      name: 'random-image',
      component: RandomImage
    },
    {
      path: '/random-image2',
      name: 'random-image2',
      component: RandomImage2
    },
    {
      path: '/random-image3',
      name: 'random-image3',
      component: RandomImage3
    },
    {
      path: '/random-image4',
      name: 'random-image4',
      component: RandomImage4
    },
    {
      path: '/random-image5',
      name: 'random-image5',
      component: RandomImage5
    },
    {
      path: '/random-image6',
      name: 'random-image6',
      component: RandomImage6
    },
    {
      path: '/random-image7',
      name: 'random-image7',
      component: RandomImage7
    },
    {
      path: '/random-image8',
      name: 'random-image8',
      component: RandomImage8
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsOfService
    },
    {
      path: '/cookie-policy',
      name: 'cookie-policy',
      component: CookiePolicy
    }
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    // 滚动到顶部
    return { x: 0, y: 0 };
  }
});