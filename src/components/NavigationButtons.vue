<template>
  <ul class="nav-buttons">
    <li v-for="item in NavButtons" :key="item.id">
      <button class="nav-buttons__button button" :aria-label="item.name">
        <TheIcons :ico="item.icon" :size="25" />
      </button>
    </li>
    <li>
      <button
        class="nav-buttons__button button nav-buttons__button_type_burger"
        @click="toggleModalMenu"
      >
        <TheIcons :ico="'burger'" :size="25" />
      </button>
    </li>
  </ul>
</template>

<script>
import { NavButtons } from "@/data/NavButtons";
import TheIcons from "@/components/TheIcons";
export default {
  name: "NavigationButtons",
  components: { TheIcons },
  data() {
    return {
      NavButtons: NavButtons,
    };
  },
  props: {
    toggleModalMenu: Function,
  },
};
</script>
