<template>
  <div class="row">
    <!-- Review form column -->
    <div class="col-md-6">
      <h2>Your review</h2>
      <form @submit.prevent="submited()">
        <div class="form-group">
          <textarea rows="7" class="form-control" v-model="review.textReview"></textarea>
        </div>
        <div class="form-group">
          <label>Rating</label>
          <star-rating v-model="review.stars"
            :star-size="26"
            :border-width="1"
            :show-rating="false"
            border-color="#777"
            active-color="#009d64"/>
        </div>
        <div class="form-group text-center">
          <input type="submit" class="btn btn-primary btn-block" value="Save review"/>
        </div>
      </form>
    </div>
    <!-- End review form column -->

    <!-- Sheet column -->
    <div class="col-md-6">
      <h2>Overview</h2>
      <p v-if="review.synopsis">{{ review.synopsis }}</p>
      <p v-else>No overview</p>

      <p class="text-center">
        <img :src="baseImagePath + posterSize + review.poster" v-if="review.poster"/>
        <img src="static/default-poster-300.jpg" class="pull-left posterIcon" v-else/>
      </p>
      <p class="tmdbScore text-center">{{ review.tmdbScore }}</p>
      <p class="text-center">{{ review.tmdbVoteCount }} votes</p>
    </div>
    <!-- End sheet column -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import StarRating from 'vue-star-rating'

export default {
  props: {
    review: {
      required: true
    }
  },

  computed: {
    ...mapGetters({
      baseImagePath: 'baseImagePath',
      posterSize: 'posterSize'
    })
  },

  methods: {
    submited() {
      this.$emit('submit');
    }
  },

  components: {
    StarRating
  }
}
</script>
