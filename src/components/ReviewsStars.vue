<template>
  <star-rating
    :star-size="7"
    :show-rating="false"
    :rating="stars"
    active-color="#333333"
    :border-width="1"
    inactive-color="#ffffff"
    border-color="#000000"
  ></star-rating>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "ReviewsStars",
  components: {
    StarRating,
  },
  props: {
    stars: Number,
  },
};
</script>
