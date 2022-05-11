<template>
  <ul class="links">
    <li class="links__item" v-for="item in productLinks" :key="item.id">
      <TheIcons :ico="item.icon" :size="20" />
      <TheLink :name="item.name" :href="item.href" underlined />
    </li>
  </ul>
</template>

<script>
import { productLinks } from "@/data/ProductCurrent";
import TheLink from "@/components/TheLink";
import TheIcons from "@/components/TheIcons";

export default {
  name: "ProductLinks",
  components: { TheIcons, TheLink },
  data() {
    return {
      productLinks,
    };
  },
};
</script>
