import Vue from 'vue'
import Vuex from 'vuex'

import reviews from '@/store/modules/reviews'
import config from '@/store/modules/config'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    config,
    reviews
  }
});

// Subscribe mutation event for update local storage
store.subscribe((mutation, state) => {
  window.localStorage.setItem('reviews', JSON.stringify(state.reviews.reviews));
});

export default store;
