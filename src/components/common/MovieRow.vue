<template>
  <div @click.prevent="clicked" class="reviewRow">
    <img :src="baseImagePath + posterIconSize + movie.poster" class="pull-left posterIcon" v-if="movie.poster"/>
    <img src="static/default-poster-92.jpg" class="pull-left posterIcon" v-else/>
    <div class="title">
      {{ movie.title }}
    </div>
    <div class="releaseDate"><i class="fa fa-calendar"></i>
      {{ movie.date}}
      <star-rating v-model="movie.stars"
        :read-only="true"
        :star-size="12"
        :inline="true"
        :show-rating="false"
        :border-width="1"
        border-color="#777"
        active-color="#009d64"
        v-if="movie.stars != null"
        />
    </div>
    <p>{{ movie.synopsis|truncate(300) }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StarRating from 'vue-star-rating'

export default {
  props: {
    movie: {
      required: true
    }
  },

  computed: {
    ...mapGetters({
      baseImagePath: 'baseImagePath',
      posterIconSize: 'posterIconSize'
    })
  },

  methods: {
    clicked() {
      this.$emit('click');
    }
  },

  components: {
    StarRating
  }
}
</script>
