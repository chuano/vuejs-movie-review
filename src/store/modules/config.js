const state = {
  apikey: 'c50ed36a9e46029dcf92211c22e931ea',
  baseImagePath: 'https://image.tmdb.org/t/p/',
  posterBigSize: 'w300',
  posterIconSize: 'w92',
  posterSize: 'w185',
  language: (window.navigator.userLanguage) ? window.navigator.userLanguage : window.navigator.languages[0]
}

const getters = {
  apikey(state) {
    return state.apikey;
  },
  baseImagePath(state) {
    return state.baseImagePath;
  },
  language(state) {
    return state.language;
  },
  posterBigSize(state) {
    return state.posterBigSize;
  },
  posterIconSize(state) {
    return state.posterIconSize;
  },
  posterSize(state) {
    return state.posterSize;
  }
}

export default {
    state,
    getters
}
