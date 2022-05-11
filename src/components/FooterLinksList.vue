<template>
  <div class="footer-links">
    <h3 class="footer-links__title">{{ title }}</h3>
    <ul class="footer-links__list">
      <li
        class="footer-links__list-item"
        v-for="item in itemList"
        :key="item.id"
      >
        <TheLink :href="item.url" :name="item.name" />
      </li>
    </ul>
  </div>
</template>

<script>
import TheLink from "@/components/TheLink";
export default {
  name: "FooterLinksList",
  components: { TheLink },
  props: {
    itemList: Array,
    title: String,
  },
};
</script>
