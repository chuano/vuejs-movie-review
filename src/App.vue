<template>
  <div id="app">
    <!-- Header nav bar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link :to="{ 'name' : 'MyReviews' }">My Reviews</router-link></li>
          <li><router-link :to="{ 'name' : 'SearchMovie' }">Search movie</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- Router view for components -->
    <div class="container body-container">
      <router-view/>
    </div>

    <footer>
      <div class="text-center">
        Author: @chuano -
        <a href="https://www.themoviedb.org/" target="_blank">
          This product uses the TMDb API but is not endorsed or certified by TMDb.
          <img src="static/tmdb-logo.svg" width="36" height="36"/>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
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
    top: 20px;
    width: 360px;
    left: 50%;
    margin-left: -180px;
    position: absolute;
    text-align: center;
    padding-right: 15px;
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
  .reviewRow:hover {
    background-color: #eee;
  }
  .reviewRow > .posterIcon {
    margin-right: 10px;
    width: 60px;
    height: 90px;
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

  @media (max-width: 768px) {
    /* Hide footer on mobile */
    footer {
      display: none!important;
    }
    /* Space for header and footer */
    .body-container {
      padding-top: 100px;
    }
    /* Poster position on mobile */
    .reviewRow .posterIcon {
       float: none!important;
       display: block;
       margin: auto!important;
     }
  }

  @media (min-width: 769px) {
    /* Show footer on large screen */
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #eee;
      border-top: 1px solid #ccc;
      padding: 5px;
    }
    /* Space for header and footer */
    .body-container {
      padding-top: 55px;
      padding-bottom: 55px;
    }
  }
</style>
