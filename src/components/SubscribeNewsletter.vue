<template>
  <form
    action=""
    class="subscribe"
    @submit="checkForm"
    method="post"
    novalidate
  >
    <label class="subscribe__title" for="POST-email"
      >Узнайте первыми о новинках и акциях</label
    >
    <ul class="subscribe__errors" v-if="errors.length">
      <li
        class="subscribe__errors-item"
        v-for="(error, index) in errors"
        :key="index"
      >
        {{ error }}
      </li>
    </ul>
    <div class="subscribe__container">
      <input
        class="subscribe__input"
        id="email"
        v-model="email"
        type="email"
        name="email"
        placeholder="Адрес электронной почты"
      />
      <button
        class="subscribe__button-reset"
        type="button"
        @click="clearForm"
        aria-label="Сбросить форму"
      >
        <TheIcons :ico="'reset'" :size="10" />
      </button>
    </div>

    <input class="subscribe__submit button" type="submit" value="Подписаться" />
  </form>
</template>

<script>
import TheIcons from "@/components/TheIcons";
export default {
  name: "SubscribeNewsletter",
  components: { TheIcons },
  data: function () {
    return {
      errors: [],
      email: null,
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.email) {
        this.errors.push("Требуется указать email.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Укажите корректный email.");
      }

      if (!this.errors.length) {
        return true;
      }
    },
    validEmail(email) {
      const regExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}1])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
      return regExp.test(email);
    },
    clearForm(e) {
      e.stopPropagation();
      this.email = null;
    },
  },
};
</script>

<style scoped></style>
