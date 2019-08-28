<template>
  <div id="app">
    <!-- Header nav bar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" @click.prevent="setCollapse(!collapse)">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="navbar-brand">VueJs Movie Review</span>
        </div>
        <!-- Collection of nav links and other content for toggling -->
        <div :class="{ 'collapse': collapse, 'navbar-collapse': true }">
          <ul class="nav navbar-nav">
            <li><router-link :to="{ 'name' : 'MyReviews' }" @click.native="setCollapse(true)">My Reviews</router-link></li>
            <li><router-link :to="{ 'name' : 'SearchMovie' }" @click.native="setCollapse(true)">Search movie</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router view for components -->
    <div class="container body-container">
      <router-view/>
    </div>

    <footer>
      <div class="text-center">
        <a href="https://www.themoviedb.org/" target="_blank">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
          <img src="./assets/tmdb-logo.svg" width="30" height="30" class="hidden-sm hidden-xs"/>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data() {
      return {
        collapse: true
      }
    },

    methods: {
      setCollapse(collapse) {
        this.collapse = collapse;
      }
    }
  }
</script>

<style>
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
  }
  .body-container {
    padding-top: 55px;
    padding-bottom: 55px;
  }

  /**
   * TheMovieDataBase score
   */
  .tmdbScore {
    font-size: 36px;
    font-weight: bold;
  }

  /**
   * Alert hacks
   */
  .alert {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-bottom: 0!important;
    border-radius: 0;
    text-align: center;
    z-index: 99999;
  }
  .alert > .close {
    position: absolute!important;
    margin-right: 25px;
  }

  /**
   * List rows
   */
  .deleteReview {
    margin-right: 5px;
  }
  .reviewRow {
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid #eee;
    min-height: 100px;

  }
  .flexContainer {
    display: flex;
  }
  .reviewRow:hover {
    background-color: #eee;
  }
  .reviewRow > .flexContainer > .iconRowBox > .posterIcon {
    margin-right: 10px;
    width: 50px;
    height: auto;
    margin-top: 3px;
  }
  .reviewRow > .title {
    font-size: 20px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
  .reviewRow > .releaseDate {
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
    color: #777;
    font-size: 0.8em;
  }
  .reviewRow > .releaseDate > .vue-star-rating-inline > .vue-star-rating > .vue-star-rating-star svg {
    vertical-align: -2px!important;
  }
  footer {
    background-color: #eee;
    border-top: 1px solid #ccc;
    padding: 5px;
    bottom: 0;
    position: fixed;
    width: 100%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.4em!important;
      margin-top: 10px!important;
    }
    h2 {
      font-size: 1.2em!important;
      margin-top: 0!important;
    }
    hr {
      margin-bottom: 10px!important;
      margin-top: 10px!important;
    }
  }
</style>
