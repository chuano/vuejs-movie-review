import Vue from 'vue'
import Router from 'vue-router'
import MyReviews from '@/views/MyReviews'
import Review from '@/views/Review'
import SearchMovie from '@/views/SearchMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyReviews',
      component: MyReviews
    },
    {
      path: '/review/:index?',
      name: 'Review',
      component: Review
    },
    {
      path: '/search-movie',
      name: 'SearchMovie',
      component: SearchMovie
    }
  ]
})