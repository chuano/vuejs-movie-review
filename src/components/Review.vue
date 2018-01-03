<template>
  <div>
    <h1>{{ review.title }}</h1>
    <hr/>
    <MovieSheet :review="review" @submit="saveReview()"/>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import MovieSheet from '@/components/common/MovieSheet'

  export default {
    computed: {
      ...mapGetters({
        review: 'review',
        reviews: 'reviews'
      })
    },

    created() {
      this.$store.commit("setReview", this.reviews[this.$route.params.index]);
    },

    methods: {
      saveReview() {
        this.$store.commit("updateReview", {
          review: this.review,
          index: this.$route.params.index
        });

        // Mark as review saved
        this.$store.commit("setReviewSaved", true);

        // Go to reviews list
        this.$router.push({ name: 'MyReviews' });
      }
    },

    components: {
      MovieSheet
    }
  }
</script>
