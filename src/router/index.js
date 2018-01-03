import Vue from 'vue'
import Router from 'vue-router'
import MyReviews from '@/components/MyReviews'
import Review from '@/components/Review'
import SearchMovie from '@/components/SearchMovie'

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
