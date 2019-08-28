<template>
  <div>
    <!-- Saved message -->
    <div class="alert alert-success alert-dismissible" role="alert" v-if="reviewSaved">
      <button class="close" @click.prevent="closeMessage()">
        <span>&times;</span>
      </button>
      {{ review.title }} review saved.
    </div>
    <!-- End saved message -->

    <!-- New review button -->
    <router-link :to="{ name: 'SearchMovie' }" class="btn btn-xs btn-primary pull-right">New review</router-link>

    <!-- Reviews list -->
    <h1>My Movie Reviews</h1>
    <hr/>
    <div class="row">
      <div class="col-md-12">
        <!-- filter box -->
        <div class="form-group">
          <input type="text" v-model="searchTerm" placeholder="Filter" class="form-control"/>
        </div>

        <!-- No reviews message -->
        <div v-if="reviews.length == 0" class="text-center">
          <p>You don't have any reviews.</p>
          <p><strong><router-link :to="{ name: 'SearchMovie' }">Create your first review</router-link></strong></p>
        </div>

        <div v-for="(review, index) in reviews" v-if="review.title.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1">
          <button class="close deleteReview" @click.prevent="deleteReview(index)">
            <span>&times;</span>
          </button>
          <MovieRow :movie="review" @click="goToReview(index)"/>
        </div>
      </div>
    </div>
    <!-- End reviews list -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MovieRow from '@/components/MovieRow'

  export default {
    data() {
      return {
        searchTerm: ''
      }
    },

    created() {
      // If marked as saved, set timeout to unmark and hide message
      if (this.reviewSaved) {
        setTimeout(() => {
          this.$store.commit("setReviewSaved", false);
        }, 5000);
      }
    },

    computed: {
      ...mapGetters({
        baseImagePath: 'baseImagePath',
        posterIconSize: 'posterIconSize',
        reviews : 'reviews',
        review: 'review',
        reviewSaved: 'reviewSaved'
      })
    },

    methods: {
      goToReview(index) {
        this.$router.push({ name: 'Review', params: { index: index } });
      },

      deleteReview(index) {
        if (confirm("Delete " + this.reviews[index].title + " review?")) {
          this.$store.commit("deleteReview", index);
        }
      },

      closeMessage() {
        this.$store.commit("setReviewSaved", false);
      }
    },

    components: {
      MovieRow
    }
  }
</script>
