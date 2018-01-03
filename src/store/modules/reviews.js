let stored = localStorage.getItem('reviews');

const state = {
  reviews: (stored) ? JSON.parse(stored) : [],
  review: {
    title: null,
    synopsis: null,
    date: null,
    tmdbId: null,
    poster: null,
    tmdbScore: null,
    tmdbVoteCount: null,
    stars: null,
    textReview: null
  },
  reviewSaved: false
}

const getters = {
  reviews(state) {
    return state.reviews;
  },
  review(state) {
    return state.review;
  },
  reviewSaved(state) {
    return state.reviewSaved;
  }
}

const mutations = {
  addReview(state, review) {
    state.reviews.push(review);
  },
  updateReview(state, payload) {
    state.reviews[payload.index] = payload.review;
  },
  deleteReview(state, index) {
    state.reviews.splice(index, 1);
  },
  setReview(state, review) {
    state.review = review;
  },
  setReviewSaved(state, saved) {
    state.reviewSaved = saved;
  },
}

export default {
    state,
    getters,
    mutations
}
