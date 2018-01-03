<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Search Movie</h1>
      <hr/>
    </div>

    <!-- Search form -->
    <form @submit.prevent="searchMovie()">
      <div class="col-md-12 form-group">
          <div class="input-group">
            <input type="text" class="form-control" v-model="searchTerm" placeholder="Search a movie"/>
            <a class="input-group-addon" @click.prevent="searchMovie()"><i class="fa fa-search"></i> Search</a>
          </div>
      </div>
    </form>
    <!-- End search form -->

    <!-- Result box -->
    <div class="col-md-12" v-if="!review.tmdbId">
      <div v-for="movie in searchResults">
        <MovieRow :movie="movie" @click="selectMovie(movie)"/>
      </div>
      <div v-if="noResults">No results found</div>
    </div>
    <!-- End result box -->

    <!-- Movie sheet -->
    <div class="col-md-12" v-else>
      <h2><a @click.prevent="unselectMovie()"><i class="fa fa-arrow-left"></i></a> {{ review.title }}</h2>
      <hr/>
      <MovieSheet :review="review" @submit="saveReview()"/>
    </div>
    <!-- End movie sheet -->
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import MovieRow from '@/components/common/MovieRow'
  import MovieSheet from '@/components/common/MovieSheet'

  export default {
    data() {
      return {
        searchTerm: null,
        searchResults: [],
        noResults: false
      }
    },

    computed: {
      ...mapGetters({
        apikey: 'apikey',
        baseImagePath: 'baseImagePath',
        language: 'language',
        posterBigSize: 'posterBigSize',
        posterIconSize: 'posterIconSize',
        reviews: 'reviews',
        review: 'review'
      })
    },

    created() {
      this.unselectMovie();
      this.noResults = false;
    },

    methods: {
      searchMovie() {
        // Empty results and unselect movie
        this.searchResults = [];
        this.unselectMovie();
        this.noResults = false;

        if (this.searchTerm == '' || this.searchTerm == null) {
          this.noResults = true;
          return;
        }

        // Build api url
        let url = 'https://api.themoviedb.org/3/search/movie' +
          '?api_key=' + this.apikey +
          "&query=" + encodeURI(this.searchTerm) +
          "&language=" + this.language;

        // Get api results
        this.$http.get(url).then(
          response => {

            if (response.body.results.length == 0) {
              this.noResults = true;
            }

            // Fill result with review objects
            for (let i = 0; i < response.body.results.length; i++) {

              // Create a movie object
              let movie = {
                title: response.body.results[i].title,
                tmdbId: response.body.results[i].id,
                synopsis: response.body.results[i].overview,
                date: response.body.results[i].release_date,
                poster: response.body.results[i].poster_path,
                tmdbScore: response.body.results[i].vote_average,
                tmdbVoteCount: response.body.results[i].vote_count,
                stars: null,
                reviewText: null
              };

              // If exists review for this tmdbId, overwrite
              let index = this.getReviewIndex(movie);
              if (index != -1) {
                movie = this.reviews[index];
              }

              // Push to result array
              this.searchResults.push(movie);
            }
          },
          error => {
            alert("A network error ocurred");
            console.log("ERROR" + error);
          }
        );
      },

      selectMovie(movie) {

        // If the movie is in reviews, load existent review
        let index = this.getReviewIndex(movie);
        if (index != -1) {
          this.$store.commit("setReview", this.reviews[index]);
        } else {
          this.$store.commit("setReview", {
            title: movie.title,
            tmdbId: movie.tmdbId,
            synopsis: movie.synopsis,
            date: movie.date,
            poster: movie.poster,
            tmdbScore: movie.tmdbScore,
            tmdbVoteCount: movie.tmdbVoteCount,
            stars: 0,
            reviewText: ''
          });
        }
      },

      unselectMovie() {
        this.$store.commit("setReview", {
          title: null,
          synopsis: null,
          date: null,
          tmdbId: null,
          poster: null,
          tmdbScore: null,
          tmdbVoteCount: null,
          stars: null,
          textReview: null
        });
      },

      saveReview() {
        let index = this.getReviewIndex(this.review);
        if (index != -1) {
          // Update the review
          this.$store.commit("updateReview", {
            review: this.review,
            index: index
          });
        } else {
          // create new review
          this.$store.commit("addReview", this.review);
        }

        // Mark as reviewSaved
        this.$store.commit("setReviewSaved", true);

        // Go to reviews list
        this.$router.push({ name: 'MyReviews' });
      },

      getReviewIndex(review) {
        let index = -1;
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].tmdbId == review.tmdbId) {
              index = i;
            }
        }
        return index;
      }
    },

    components: {
      MovieRow,
      MovieSheet
    }
  }
</script>
