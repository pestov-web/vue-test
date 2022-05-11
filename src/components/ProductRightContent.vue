<template>
  <div class="right-content">
    <div class="right-content__container">
      <h2 class="right-content__title">{{ name }}</h2>
      <p class="right-content__subtitle">{{ article }}</p>
      <div class="right-content__reviews">
        <TheLink :href="'#'" :name="'Отзывы'" />
        <ReviewsStars :stars="stars" />
        <span class="right-content__reviews-count">{{ reviews }} отзывов </span
        ><TheIcons :ico="'chevronRight'" :size="15" />
      </div>
      <p class="right-content__price">
        <span class="right-content__price-discounted"
          >{{ countPrice(price, discount) }} ₽
        </span>
        <span class="right-content__price-current">{{ price }} ₽</span>
        <TheIcons :ico="'chevronRight'" :size="15" />
      </p>
      <ul class="right-content__discount">
        <li
          class="right-content__discount-item"
          v-for="item in discount"
          :key="item.id"
        >
          {{ item.name }} -{{ item.value }}%
        </li>
      </ul>
      <BuyForm
        :name="name"
        :priceCurrent="countPrice(price, discount)"
        :sizes="sizes"
        :toggleModalMsg="toggleModalMsg"
        :setProduct="setProduct"
      />
    </div>
    <ProductLinks />
  </div>
</template>

<script>
import BuyForm from "@/components/BuyForm";
import ProductLinks from "@/components/ProductLinks";
import TheLink from "@/components/TheLink";
import ReviewsStars from "@/components/ReviewsStars";
import TheIcons from "@/components/TheIcons";
export default {
  name: "ProductRightContent",
  components: { TheIcons, ReviewsStars, TheLink, ProductLinks, BuyForm },
  props: {
    name: String,
    article: String,
    reviews: Number,
    stars: Number,
    price: Number,
    discount: Array,
    sizes: Array,
    toggleModalMsg: Function,
    setProduct: Function,
  },
  methods: {
    countPrice(price, discountArray) {
      let result = discountArray.sort((a, b) => {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
      });
      return price - (price / 100) * result[0].value;
    },
  },
};
</script>

<style scoped></style>
