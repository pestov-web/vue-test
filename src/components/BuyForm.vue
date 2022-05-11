<template>
  <form class="buy-form" action="">
    <select class="buy-form__sizes" id="sizes" name="sizes">
      <option value="">Выбрать размер</option>
      <option
        class="buy-form__sizes-option"
        v-for="(item, index) in sizes"
        :key="index"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
    <TheLink :href="'#'" :name="'Определить размер'" underlined />
    <div class="buy-form__container">
      <div class="buy-form__wrapper">
        <button
          class="buy-form__button button"
          type="button"
          @click="increaseCounter"
        >
          +</button
        ><button type="button" class="buy-form__button">
          {{ quantityCounter }}
        </button>
        <button
          class="buy-form__button button"
          type="button"
          @click="decreaseCounter"
        >
          -
        </button>
      </div>

      <div class="buy-form__wrapper">
        <input
          class="buy-form__submit-button button"
          type="button"
          value="Добавить в корзину"
          @click="handleAddToCart('Корзину')"
          :class="quantityCounter === 0 && 'button_disabled'"
          :disabled="quantityCounter === 0"
        />
        <button
          type="button"
          aria-label="Избранное"
          class="buy-form__like-button button"
          @click="handleAddToCart('Избранное')"
          :class="quantityCounter === 0 && 'button_disabled'"
          :disabled="quantityCounter === 0"
        >
          <TheIcons :ico="'like'" :size="25" />
        </button>
      </div>
    </div>
    <TheLink :href="'#'" :name="'Купить в 1 клик'" underlined />
  </form>
</template>

<script>
import TheLink from "@/components/TheLink";
import TheIcons from "@/components/TheIcons";
export default {
  name: "BuyForm",
  components: { TheIcons, TheLink },
  data() {
    return {
      quantityCounter: 0,
    };
  },
  props: {
    name: String,
    priceCurrent: Number,
    sizes: Array,
    toggleModalMsg: Function,
    setProduct: Function,
  },
  methods: {
    increaseCounter() {
      this.quantityCounter++;
    },
    decreaseCounter() {
      if (!this.quantityCounter <= 0) {
        this.quantityCounter--;
      }
    },
    handleAddToCart(title) {
      if (this.quantityCounter > 0) {
        this.setProduct(
          title,
          this.name,
          this.quantityCounter,
          this.priceCurrent
        );
        this.toggleModalMsg();
      }
    },
  },
};
</script>
