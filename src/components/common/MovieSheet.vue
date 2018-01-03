<template>
  <div class="row">
    <!-- Sheet column -->
    <div class="col-md-6">
      <p v-if="review.synopsis">{{ review.synopsis }}</p>
      <p v-else>No overview</p>
      <div class="row">
        <div class="col-md-9 text-center">
          <img :src="baseImagePath + posterBigSize + review.poster" v-if="review.poster"/>
          <img src="static/default-poster-300.jpg" class="pull-left posterIcon" v-else/>
        </div>
        <div class="col-md-3 text-center">
          <p class="tmdbScore">{{ review.tmdbScore }}</p>
          <p>{{ review.tmdbVoteCount }} votes</p>
        </div>
      </div>
    </div>
    <!-- End sheet column -->

    <!-- Review form column -->
    <div class="col-md-6">
      <form @submit.prevent="submited()">
        <div class="form-group">
          <label>Review</label>
          <textarea class="form-control" v-model="review.textReview"></textarea>
        </div>
        <div class="form-group">
          <label>Rating</label>
          <star-rating v-model="review.stars"
            :star-size="26"
            :border-width="1"
            border-color="#777"
            active-color="#009d64"/>
        </div>
        <div class="form-group text-center">
          <input type="submit" class="btn btn-primary btn-block" value="Save review"/>
        </div>
      </form>
    </div>
    <!-- End review form column -->
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
      posterBigSize: 'posterBigSize'
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
